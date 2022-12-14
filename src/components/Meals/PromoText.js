import s from './PromoText.module.css'

const PromoText = () => {
    return (
        <section className={s['promo-text']}>
            <h2>Онлайн суші ресторан Япона Кухня</h2>
            <p>Япона Кухня - це онлайн суші-ресторан, в якому улуюбені
                супи та сашимі, роли та інші блюда національної японської
                кухні роблять команда професіональних кухарів.</p>
            <p>Швидка робота та якісна продукція, а також справжні компоненти
                надають стравам ідеальний смак та дарують насолоду.</p>
        </section>
    );
};

export default PromoText;