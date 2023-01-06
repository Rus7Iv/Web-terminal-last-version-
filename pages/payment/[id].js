import { useRouter } from "next/router"
import styles from '../../styles/payment.module.scss'
import MainContainer from "../../components/MainContainer";

export default function Payment({payment}){
    const {query} = useRouter()

    return(
        <MainContainer keywords="id payment next.js">
            <div className={styles.payment}>
                <h1>Оператор с id {query.id}</h1>
            </div>
        </MainContainer>
    )
};