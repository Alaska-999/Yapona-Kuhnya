import s from './MealList.module.css'
import Card from "../UI/Card";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: 'Рол "Наомі"',
        description:
            "Сир Філадельфія, куряче філе, масаго, помідор, огірок, кунжут",
        price: 11.99,
    },
    {
        id: "m2",
        name: "Спайс в лососі",
        description: "Рис, лосось, соус спайс",
        price: 3.99,
    },
    {
        id: "m3",
        name: "Суші з вугрем",
        description: "Вугор копченый, соус унагі, кунжут",
        price: 4.99,
    },
    {
        id: "m4",
        name: 'Салат "Поке з лососем"',
        description:
            "Рис, лосось, огірок, чука, норі, соус горіховий",
        price: 7.99,
    },
];

const MealList = () => {
    const mealList = DUMMY_MEALS.map(meal => <MealList
        name={meal.name}
        description={meal.description}
        price={meal.price}
        key={meal.id}
    />)
    return <section className={s.meals}>
        <Card>
            <ul>
                {mealList}
            </ul>
        </Card>

    </section>
}

export default MealList;