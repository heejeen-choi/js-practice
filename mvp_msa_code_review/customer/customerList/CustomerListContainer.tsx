import {Button, Modal} from '@mui/material';
import { Tune } from '@mui/icons-material';
import React, {useEffect, useState} from 'react';
import Stack from '@mui/material/Stack';
import {observer, useLocalObservable} from 'mobx-react';
import MoreView from '~/app/view/shared/view/MoreView';
import OneBtn from '~/app/view/shared/view/OneBtn';
import CustomerSearchModalView from './view/CustomerSearchModalView';
import {OpportunityStateKey} from '@ajnet.ms/sales-mate';
import CustomerItemView from './view/CustomerItemView';
import {CustomersStateKeeper} from '~/app/state/customer';
import {Offset} from '@nara/accent';
import {ActorProfileRdo} from "@nara/metro/dist/@types/api";
import AlertBox from "~/app/view/shared/view/AlertBox";
import {cloneDeep} from "lodash";

export type CustomerListQuery = {
    customerName?: string
    rentalCustomerNumber?: string
    managers: { id: string, name: string }[]
    opportunityStates: OpportunityStateKey[]
}

/** export 문은 javascript 모듈에서 함수,객체,원시값을 내보낼때 사용한다. 내보낸 값은 다른 프로그램에서 import 문으로 가져가 사용할 수 있다.
 * 타입스크립트에서의 import/export 기능은 javaScript 에서의 기능과 거의 비슷하다.
 * 내보내는 모듈은 'use strict' 존재 유무와 상관없이 무조건 엄격모드이다. export문은 HTML 안에 작성한 스크립트에서는 사용할수 없다.
 * 여기서는, CustomerListQuery 의 객체들을 타입값을 명시해서 목록으로 내보낸다 : export { name1, name2, ..., nameN };
 * export 명령어 중괄호 안에는 외부에서 사용할 수 있도록 필요한 함수를 선언하면 된다.
 * 이를 가져올때는, import { select, insert, update, remove } from "파일위치";
 *      또는, 별칭을 줘서 가져올 수도 있다 : import * as all from "파일위치";
 *                                  all.select
 *                                  all.insert
 *                                  all.update
 *                                  all.remove
 *      그런데, default 가 붙은 export 가 있다.
 *      내보내는 곳에서 : export default { select, insert, update, remove }; 라면, import 형식이 바뀐다. 중괄호로 여러개를 할 수 없음
 *                    import select from "파일위치";
 *                    import insert from "파일위치";
 *                    import update from "파일위치";
 *                    import remove from "파일위치";
 * 클래스 및 인터페이스와 마찬가지로 타입도 export 할 수 있다. 타입(type)을 export 하는 경우에는 export 뒤에 type을 적어줘야 한다.
 *      type CustomerListQuery = {
 *          customerName?: string
 *          rentalCustomerNumber?: string
 *          managers: { id: string, name: string }[]
 *          opportunityStates: OpportunityStateKey[]
 *      };
 *      export type { CustomerListQuery };
 *      이를 가져올 때는 기존에 하던 것처럼 가져온다.
 *      import { CustomerListQuery } from "대상파일";
 */

interface Props {
    baseStageId: string
    route: (id: string) => void;
    routeToForm: () => void;
    routeToActivity:(customerId: string, customerName: string) =>void
    routeToBo:(customerId: string)=>void

}

/** 타입스크립트의 타입체크의 지향점 : 타입체크는 값의 형태에 기반하여 이루어져야 한다. 이것을, duck typing 이라고 함.
 * duck typing 에서는, 객체의 타입보다 객체가 사용되는 양상이 중요하다. 즉, 객체의 변수, 메소드의 집합으로 객체의 타입이 결정되는 것이다. : 타입스크립트는 현재 가지고 있는 메소드 및 값에 의해 타입 체크가 이루어져야 한다는 것.
 * ** interface의 장점 및 사용법
 *      let person = {
 *          name: "Capt",
 *          age: 28
 *      };
 *      const logAge = (obj:{age:number}) => {
 *          console.log(obj.age);               (:콘솔창 28)
 *      }
 *      logAge(person);             (:콘솔창 28)
 *   - 이렇게 함수의 param(<param> 요소는, <object> 요소에 의해 불러와지는 플러그인을 위한 매개변수를 정의한다, name 과 value 두 속성 모두 반드시 존재해야하며 어떤 값도 가질 수 있다.)에 객체의 속성 타입을 정의할 수 있다.
 *   - 그러나, interface 를 사용하면 함수의 인자가 좀 더 명시적(내용이나 뜻을 더 분명하게 드러냄)으로 바뀌고 같은 type 을 사용할 경우 재사용이 가능하다.
 *   - interface 를 사용할 때는, 함수 내에 사용할 속성에 대해서만 interface 를 지정해줘도 되고, interface 내의 속성 순서를 지키지 않아도 된다.
 *   - (1) Optional Property : interface 사용할 때 interface 내에 정의한 속성 전부를 사용하지 않아도 된다. 이를 옵션 속성이라고 함. ? 를 이용하여 사용한다.
 *             interface TestType {
 *                  test: string;
 *                 test2?: number;
 *             }
 *             let testProp = {
 *                 test: "ttt"
 *                 //test2 는 옵션값이므로 있어도되고, 없어도 됨.
 *             };
 *             const testFunc = (param: TestType) => {
 *                 console.log(param.test);                (: 콘솔창 ttt)
 *             }
 *             testFunc(testProp);
 *   - (2) 읽기전용 속성 : 객체를 처음 생성할 때만 값을 할당하며, 그 이후로는 값이 바뀔 수 없는 속성을 의미한다. readonly 속성을 앞에 붙임.
 *             interface ReadOnly {
 *                 readonly test: string;
 *             }
 *        readonly로 선언 후에 수정하면 오류가 난다.
 *            let params: ReadOnly = {
 *                 test: "test3"
 *            };
 *            params.test = "test4";      (: Error)
 *   - (3) interface 에 정의되지 않은 속성 사용 : 객체의 값으로 어떤 값이 들어올지 예상이 안되는 경우 interface를 정의할 수 없다. 그럴땐 지정한 타임으로 되어있는 값은 무조건 받아주는 방법이 있다.
 *            interface test {
 *                [key: string]: number;
 *            }
 *            const test: test = { anyone: 33, ddd: 22 };
 *   - (4) 함수타입 : interface는 값 정의 말고도 함수 정의 시에도 사용 됨. 인자에 대한 타입정의 그리고 리턴값에 대한 타입을 정의한다.
 *            interface test {
 *                (
 *                test1: string,
 *                test2: number
 *                ): boolean;
 *            }
 *            const test3:test = (a, b) => {
 *                console.log(a, b);            //a-> string type 'a' ,  b-> number type 2
 *                return true;
 *            };
 *            test3("a", 2);
 *   - (5) class 에서 ts 사용예제
 *            class Person {
 *                private name: string;
 *                public age: number;
 *                readonly log: string;
 *
 *                constructor (name: string, age: number) {
 *                    this.name = name;
 *                    this.age = age;
 *                }
 *            }
 *   - (6) interface 확장 : 재활용성을 높이기 위해 확장 기능을 사용함. 확장시 대상이 된 interface의 속성을 모두 사용할 수 있고 상속 받은 값을 또 상속 가능.
 *            interface Person {
 *                name: string;
 *            }
 *            interface Drinker extends Person {
 *                drink: string;
 *            }
 *            interface Developer extends Drinker {
 *                skill: string;
 *            }
 *            let fe = {} as Developer;
 *            fe.name = "josh";
 *            fe.skill = "TypeScript";
 *            fe.drink = "Beer";
 */

const CustomerListContainer = (props: Props) => {       //props = properties 성질,특징 : 어떤 값을 컴포넌트에게 전달해줘야 할 때 사용.
                                                        //https://react.vlpt.us/basic/05-props.html
    const LIMIT_SIZE = 5;
    const {route, routeToForm} = props;
    const [query, setQuery] = React.useState<CustomerListQuery>({managers: [], opportunityStates: []});
    const [open, setOpen] = useState<boolean>(false);
    const [response, setResponse] = React.useState<{status?: '알림' | '성공', open: boolean, message?: string}>({open: false});
    const [success, setSuccess] = React.useState<boolean>(false)
    const [limit, setLimit] = useState<number>(LIMIT_SIZE);
    const customersStateKeeper = useLocalObservable(() => CustomersStateKeeper.instance);
    const {customerSummaries, totalCount, next} = customersStateKeeper;

    useEffect(() => {
        findCustomerSummariesByQuery(0);
    }, []);

    const handleOpenFilter = async() => setOpen(true);
    const handleCloseFilter = () => setOpen(false);

    const handleClickForm = () => {
        routeToForm();
    };

    const handleClickSearch = async () => {
        findCustomerSummariesByQuery(LIMIT_SIZE);
        handleCloseFilter();
    }

    const findCustomerSummariesByQuery = async (newLimit?: number) => {
        if(newLimit !== 0){
            // if (!query.customerName || query.customerName === '') {
            //   setResponse({status: '알림', open: true, message: '고객사명을 입력해주세요.'});
            //   return;
            // }
        }


        try {
            const offset = Offset.newDescending(0, newLimit || limit, 'registrationTime');
            await customersStateKeeper.findCustomerSummaries(
                query.customerName || '',
                query.rentalCustomerNumber || '',
                query.managers ? query.managers.map((val) => val.id) : [],
                query.opportunityStates,
                offset);

            if (newLimit && newLimit!== 0) {
                setLimit(newLimit);
            }
        } catch (err) {
            setResponse({
                status: '알림',
                open: true,
                message: '조회하는 동안 오류가 발생했습니다.'
            });
        }

    }

    const handleClickNextPage = () => {
        const newLimit = customersStateKeeper.totalCount !== limit ? limit + LIMIT_SIZE : limit;
        findCustomerSummariesByQuery(newLimit);
    }

    const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setQuery((prev) => ({
            ...prev,
            [name]: value
        }))
    };

    const handleClickOpportunityState = (value: OpportunityStateKey) => {
        setQuery((prev) => {
            const opportunityStates = prev.opportunityStates.includes(value)
                ? [...prev.opportunityStates.filter((val) => val !== value)]
                : [...prev.opportunityStates, value];

            return {
                ...prev,
                opportunityStates
            }
        })
    }

    const handleClickSaveManagers = (mangers: { id: string, name: string }[]) => {
        setQuery((prev) => ({
            ...prev,
            managers: [...mangers]
        }))
    }

    const handleErrorAlert = () => {
        setResponse({
            open: false
        });
        if (success) {
            // router.back();
        }
    }

    const onClickResetFilterValue = () =>{
        const tempQuery = cloneDeep(query);
        tempQuery.customerName = '';
        tempQuery.rentalCustomerNumber = '';
        tempQuery.opportunityStates = [];
        tempQuery.managers = [];
        setQuery(tempQuery);
    }

    return (
        <>
            <CustomerSearchModalView
                open={open}
                closeFilter={handleCloseFilter}
                stageId={props.baseStageId}
                query={query}
                onChangeQuery={handleChangeQuery}
                onClickOpportunityState={handleClickOpportunityState}
                onClickSaveManagers={handleClickSaveManagers}
                onClickSearch={handleClickSearch}
                onClickResetFilterValue={onClickResetFilterValue}
            />

            <Stack spacing='25rem' className='section mt25'>
                <div className='flex align-center justify-space fixAreaSearch'>
                    <p className="f-mb">총 <span className='c-f-primary'>{customersStateKeeper.totalCount}</span>건</p>
                    <Stack spacing='0' direction='row'>
                        <Button className='btn-circle-info' onClick={handleOpenFilter}>
                            <Tune style={{width: '25rem', height: '25rem'}}/>
                        </Button>
                    </Stack>
                </div>

                <Stack spacing='20rem' className='contentArea '>
                    {customersStateKeeper.customerSummaries
                        .map((summary) => (
                            <CustomerItemView
                                key={summary.id}
                                name={summary.name || ''}
                                kind={summary.erp ? '기존고객' : '가망고객'}
                                customerId={summary.id}
                                rentalCustomerNumber={summary.rentalCustomerNumber}
                                team={summary.managerDepartmentName}
                                manager={summary.managerName}
                                news={summary.noticeCount}
                                comment={summary.commentCount}
                                opportunityOpenCount={summary.opportunityOpenCount}
                                opportunityClosedCount={summary.opportunityClosedCount}
                                opportunityCanceledCount={summary.opportunityCanceledCount}
                                activityWaitingAndProgressCount={summary.activityWaitingAndProgressCount}
                                activityCompleteCount={summary.activityCompleteCount}
                                activityDelayAndCancelCount={summary.activityDelayAndCancelCount}
                                route={route}
                                routeToActivity={props.routeToActivity}
                                routeToBo={props.routeToBo}
                                // newsAlarm
                                // commentAlarm
                            />
                        ))}
                    {
                        next&&
                        <MoreView
                            currentCount={customersStateKeeper.customerSummaries.length}
                            totalCount={customersStateKeeper.totalCount}
                            onClick={handleClickNextPage}
                        />
                    }
                </Stack>
                <div className='fixArea2'>
                    <OneBtn name='고객등록' onClick={handleClickForm}/>
                </div>
            </Stack>
            <Modal
                open={response.open}
                onClose={handleErrorAlert}
            >
                <AlertBox
                    status={response.status}
                    onClose={handleErrorAlert}
                    message={response.message}
                />
            </Modal>
        </>
    )
};

// <AppBar
//     position="static"
//     color="default"
//     elevation={0}
//     sx={{borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}
// >
//     <Toolbar>
//         <Grid container spacing={2} alignItems="center">


export default observer(CustomerListContainer);