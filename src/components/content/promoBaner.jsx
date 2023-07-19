const PromoBaner = () => {
  return (
    <div className='promo-baner'>
      <span className='promo-header-text'>
        Вместе с &nbsp;
        <span className='gradient-text'>БЕСПЛАТНОЙ</span> <br />
        <span className='gradient-text'>КОНСУЛЬТАЦИЕЙ</span> мы дарим:
      </span>
      <div class='products'>
        <div class='section'>
          <span className='product-header'>Виджеты</span>
          <span className='product-text'>
            30 готовых <br />
            решений
          </span>
        </div>
        <div class='section'>
          <span className='product-header'>DASHBOARD</span>
          <span className='product-text'>
            с показателями <br />
            вашего бизнеса
          </span>
        </div>
        <div class='section'>
          <span className='product-header'>SKYPE АУДИТ</span>
          <span className='product-text'>
            отдела продаж <br />и CRM системы
          </span>
        </div>
        <div class='section'>
          <span className='product-header'>35 дней</span>
          <span className='product-text'>
            использования <br />
            CRM
          </span>
        </div>
      </div>
      <button className='promo-baner-button'>Получить консультацию</button>
    </div>
  );
};

export default PromoBaner;
