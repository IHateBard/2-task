const HeaderNavBar = () => {
  return (
    <div class='menu'>
      <ul>
        <li>
          <a href='#'>Услуги</a>
        </li>
        <li>
          <a href='#'>Виджеты</a>
        </li>
        <li>
          <a href='#'>Интеграции</a>
        </li>
        <li>
          <a href='#'>Кейсы</a>
        </li>
        <li>
          <a href='#' className='hidden'>
            Сертификаты
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNavBar;
