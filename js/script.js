
const isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

if (isMobile.any()) {
    document.body.classList.add('isMobile')
} else {
    document.body.classList.remove('isMobile')
};
function support_format_webp()
{
 var elem = document.createElement('canvas');

 if (!!(elem.getContext && elem.getContext('2d')))
 {
  // was able or not to get WebP representation
  return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
 }
 else
 {
  // very old browser like IE 8, canvas not supported
  return false;
 }
}
if (support_format_webp()) document.body.classList.add('webp');
document.addEventListener("DOMContentLoaded",(e) => {
  const mobileMenu = document.querySelector('.mobile-menu');
const burgerBtn = document.querySelector('#burger');
const overlayItem = document.querySelector('.overlay');
const burgerCloseItem = document.querySelector('#burger-close')
if (mobileMenu) {
  function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    burgerBtn.classList.toggle('active')
    document.body.classList.toggle('no-scroll')
  }
  burgerCloseItem.addEventListener('click', toggleMobileMenu)
  burgerBtn.addEventListener('click', toggleMobileMenu)
  // overlayItem.addEventListener('click',toggleMobileMenu )
}
;
  const bodyNavItems = document.querySelectorAll('.body-nav')
if (bodyNavItems.length) {
  function showActiveClassNavContent(array, currentContent) {
    array.forEach(item => item.classList.remove('active'))
    currentContent.classList.add('active')
  }
  bodyNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const navBtn = e.target.closest('button[nav-btn-js]')
      if (navBtn && !navBtn.classList.contains('active') && navBtn.hasAttribute('has-content')) {
        const activeBtn = e.currentTarget.querySelector('button[nav-btn-js].active');
        activeBtn.classList.remove('active')
        navBtn.classList.add('active')
        const navContentItems = e.currentTarget.querySelectorAll('.nav-content')
        const indexContent = navBtn.getAttribute('nav-content')
        showActiveClassNavContent(navContentItems, navContentItems[indexContent])
      }
    })
  })

}

// if-touchpad

const navLinkItems = document.querySelectorAll('.nav .nav__list-item[has-content] > button')
const bodyNavLinkItems = document.querySelectorAll('.nav .nav__list-item[has-content] .body-nav')
function removeActiveClassBodyNav(number) {
  for (let i = 0; i < bodyNavLinkItems.length; i++) {
    if (+number !== +(bodyNavLinkItems[i].getAttribute('number-content'))) {
      bodyNavLinkItems[i].classList.remove('active')
      navLinkItems[i].classList.remove('active')
    }
  }
}
function toggleClassActiveBodyNav(bodyNav, btn) {
  bodyNav.classList.toggle('active')
  btn.classList.toggle('active')
}
if (isMobile.any()) {
  navLinkItems.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const parentItem = e.currentTarget.closest('.nav__list-item[has-content]')
      const bodyNavItem = parentItem.querySelector('.body-nav')
      removeActiveClassBodyNav(bodyNavItem.getAttribute('number-content'))
      toggleClassActiveBodyNav(bodyNavItem, e.currentTarget)

    })
  })
}
;
  (function() {
  const sliderIntroContainer = document.querySelector('.intro-swiper');
  if (sliderIntroContainer) {
    const swiperIntro = new Swiper(sliderIntroContainer, {
      // Optional parameters
      loop: true,
      speed: 700,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        type: "custom",
        renderCustom: function (swiper, current, total) {
          console.log(current, total ,swiper)
          const currentValue = current < 10 ? `0${current}` : current
          const totalValue = total < 10 ? `0${total}` : total
          return `<span class="current">${currentValue}</span>` + ' <span class="divider">–</span> ' + `<span class="total">${totalValue}</span>`
        },
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
    });
  }
  const sliderProductsContainers = document.querySelectorAll('.slider-products-swiper');
  if (sliderProductsContainers.length) {
    sliderProductsContainers.forEach(el => {
      // el.style.display = 'none'
      let swiperProducts = new Swiper(el, {
        // Optional parameters
        loop: true,
        speed: 700,
        spaceBetween: 40,
        slidesPerView: 2,
        navigation: {
          nextEl: el.closest('.slider-products').querySelector('.swiper-button-next'),
          prevEl: el.closest('.slider-products').querySelector('.swiper-button-prev'),
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
            allowTouchMove: true,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          991: {
            slidesPerView: 2.4,
            spaceBetween: 40,
          },
          1150: {
            slidesPerView: 3.7,
            spaceBetween: 40,
            // allowTouchMove: false,
          },
        }
        // And if we need scrollbar
      });
    })
  }
  // features slide
  const sliderFeatureContainer = document.querySelector('.swiper-features');
  const featureSection = document.querySelector('.features');
  if (sliderFeatureContainer) {
    const swiperFeature = new Swiper(sliderFeatureContainer, {
      // Optional parameters
      loop: true,
      speed: 700,
      spaceBetween: 30,
      slidesPerView: 1,
      pagination: {
        el: featureSection.querySelector('.swiper-pagination'),
        type: "custom",
        renderCustom: function (swiper, current, total) {
          const currentValue = current < 10 ? `0${current}` : current
          const totalValue = total < 10 ? `0${total}` : total
          return `<span class="current">${currentValue}</span>` + ' <span class="divider">–</span> ' + `<span class="total">${totalValue}</span>`
        },
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
    });
  }

  // social-block
  const sliderSocialBlock = document.querySelector('.social-block-swiper');
  if (sliderSocialBlock) {
    const swiperFeature = new Swiper(sliderSocialBlock, {
      // Optional parameters
      loop: true,
      speed: 700,
      spaceBetween: 20,
      centeredSlides: true,
      // slidesPerView: 3,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1.8,
          spaceBetween: 20,
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 3.2,
          spaceBetween: 40,
          // allowTouchMove: false,
        },
      }
      // And if we need scrollbar
    });
  }
  // product-slide
  const productSliderContainer = document.querySelector('.product-slider');
  if (productSliderContainer) {
    const swiperProduct = new Swiper(productSliderContainer, {
      // Optional parameters
      // loop: true,
      speed: 700,
      spaceBetween: 18,
      // slidesPerView: 1.33,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },

        1076: {
          slidesPerView: 1.33,
          // allowTouchMove: false,
        },
      }
    });
  }
})();
   // selects
 const parentOfSelects = document.querySelector('.slots-choice');
 const selectsHeaders = document.querySelectorAll('.select__header');
 const selectsItems = document.querySelectorAll('.select__item');
 const selects = document.querySelectorAll('.select');
 if (selectsHeaders.length) {
   for (let i = 0; i < selectsHeaders.length; i++) {
     selectsHeaders[i].addEventListener('click', selectToggle)
   }
   for (let i = 0; i < selectsItems.length; i++) {
     selectsItems[i].addEventListener('click',selectChoose)
   }
   function selectToggle() {
     removeClassActive(this.closest('.select').dataset.select);
     this.closest('.select').classList.toggle('active')
   }
   function selectChoose() {
     const parent = this.closest('.select');
     if (parent.classList.contains('select-size')) {
      const textSize = this.querySelector('span.size').textContent
      const textHeight = this.querySelector('span.height').textContent
      const inputValueSize = this.querySelector('input[size]').value;
      const inputValueHeight = this.querySelector('input[height]').value;
      const currentTextSize = parent.querySelector('.select__header span.size')
      const currentTextHeight = parent.querySelector('.select__header span.height')
      const currentInputSize = parent.querySelector('.select__header input[size]');
      const currentInputHeight = parent.querySelector('.select__header input[height]');
      currentTextSize.textContent = textSize
      currentTextHeight.textContent = textHeight
      currentInputSize.value = inputValueSize
      currentInputHeight.value = inputValueHeight
      parent.classList.remove('active')
      return false
     }
     const text = this.textContent.replace(/г. /gi, '');
     const inputValue = this.querySelector('input').value;
     const currentText = parent.querySelector('.select__header span')
     const currentInput = parent.querySelector('.select__header input[type="hidden"]');
     currentInput.value = inputValue
     currentText.textContent = text;
     parent.classList.remove('active')
   }
    function removeClassActive(number) {
      for (let i = 0; i < selects.length; i++) {
        if (+number !== +(selects[i].dataset.select)) {
          selects[i].classList.remove('active')
        }
      }
    }
 }


;
  const modalOverlay = document.querySelector('.modal-overlay');
function showModal(modal) {
  modal.style.display = 'block';
  setTimeout(() => {
    modal.classList.add('active');
  }, 100)
  document.body.classList.add('no-scroll')
}

function closeModal(modal) {
  modal.classList.remove('active');
  setTimeout(() => {
    modal.style.display = 'none'
    modalOverlay.classList.remove('active');
  }, 170)
  document.body.classList.remove('no-scroll')
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay || e.target.closest('button.modal-close')) {
      const activeModal =  modalOverlay.querySelector('.modal.active')
      closeModal(activeModal)
    }
  })
};
  (function() {
  const formAreas = document.querySelectorAll('.form__area');
  if (!formAreas.length) return false
  formAreas.forEach(area => {
    area.addEventListener('keyup', function(e){
      this.style.height = 210 + 'px';
      this.style.height = this.scrollHeight + "px";
    });
  })
})();
  (function () {
  const filterRange = document.querySelectorAll('.filter-range')
  if (!filterRange) {
    return
  }
  filterRange.forEach(filter => {
    const minValue = +filter.getAttribute('min-value')
    const maxValue = +filter.getAttribute('max-value')
    const prefix = filter.getAttribute('data-prefix');
    noUiSlider.create(filter, {
      start: [minValue, maxValue],
      connect: true,
      range: {
        min: minValue,
        max: maxValue,
      },
      tooltips: true,
      format: wNumb({
        decimals: 0,
        thousand: ' ',
        edit: function( value ) {
          return prefix ? `${value} ${prefix}` : value;
      }
      }),
    })
    const filterInputStart = filter.closest('.drop-range').querySelector('.filter-range-start')
    const filterInputEnd = filter.closest('.drop-range').querySelector('.filter-range-end')
    const filterInputs = [filterInputStart, filterInputEnd]
    filter.noUiSlider.on('update', function (values, handle) {
      filterInputs[handle].value = values[handle]
    })
    filterInputStart.addEventListener('change', setPriceValues)
    filterInputEnd.addEventListener('change', setPriceValues)
    function setPriceValues() {
      let priceStartValue = filterInputStart.value;
      let priceEndValue = filterInputEnd.value;
      filter.noUiSlider.set([priceStartValue, priceEndValue])
    }
  })

})()
;
  ;(function () {
  const map = document.querySelector('#ymap')
  if (!map) {
    return false
  }

  const iconUrl = map.getAttribute('icon-url');
  const zoomValue = map.getAttribute('zoom-map')
  const coordinate = map.getAttribute('coordinate-map')
  const coordinateSplited = coordinate.split(',')
  let iconSize = [79, 84]
  let iconOffset = [-15, -88]
  if (document.documentElement.clientWidth <= 575) {
    iconSize = [45,49]
    iconOffset = [-15, -48]
  }
  ymaps.ready(function () {
    var myMap = new ymaps.Map(
        'ymap',
        {
          center: [+coordinateSplited[0], +coordinateSplited[1]],
          zoom: zoomValue,
        },
        {
          searchControlProvider: 'yandex#search',
        }
      ),
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка',
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: iconUrl,
          // Размеры метки.
          iconImageSize: iconSize,
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: iconOffset,
        }
      )
      myMap.geoObjects.add(myPlacemark)
    myMap.behaviors.disable('scrollZoom')
  })
})()
;
  (function () {
  const videos = document.querySelectorAll('video');

  if (!videos.length) return false
  videos.forEach(video => {
    video.addEventListener('click', function(e) {
      if (this.paused) {
        this.play()
        this.closest('.swiper-slide').querySelector('button.play').style.display = 'none'
      } else {
        this.pause()
        this.closest('.swiper-slide').querySelector('button.play').style.display= 'block'
      }
    })
  })

})();
  // js-counter-product
(function () {
  const btnCounterPlus = document.querySelectorAll('.counter-btn--plus')
  const btnCounterMinus = document.querySelectorAll('.counter-btn--minus')
  const perMeterPriceItems = document.querySelectorAll('[product-js] [data-meter]')
  const totalPriceProduct = document.querySelector('.cart .cart__total-price')
  const inputDisplayItems = document.querySelectorAll('.cart input[input-price="desktop"]')
  const productParent = document.querySelector(`[product-js]`)
  calcTotalPrice()

  function setPerMetersAttribute() {
    if (!perMeterPriceItems.length) return false
    perMeterPriceItems.forEach((item => {
      const rangeArray = item.getAttribute('data-meter').split('-');
      const startRange = rangeArray[0]
      const endRange = rangeArray[1]
      if (!endRange) {
        item.setAttribute('data-meter', startRange)
      } else {
        let rangeTemplate = ''
        for (let i = +startRange; i <= +endRange; i++) {
          rangeTemplate+= `${i} `
        }
        item.setAttribute('data-meter', rangeTemplate)
      }
      // const startRange = item.g
    }))
  }
  setPerMetersAttribute()

  function renderPrice(input) {
    checkCountPrice(+input.value)
    const parentProduct = input.closest('[product-js]')
    const priceItems = parentProduct.querySelectorAll('[product-prices-js]');
    const currentPrice = +input.value * +parentProduct.getAttribute('product-price')
    const formattedPrice = new Intl.NumberFormat('ru-RU').format(currentPrice)
    priceItems.forEach(item => {
      const inputPriceDisplay = item.querySelector('input[input-price]')
      inputPriceDisplay.value = currentPrice
      item.querySelector('[price-display]').textContent = `${formattedPrice} руб.`
    })
    calcTotalPrice()
  }
  function calcTotalPrice() {
    if (!totalPriceProduct) return false
    let totalPrice = 0
    inputDisplayItems.forEach(input => {
      totalPrice += +input.value
    })
    totalPriceProduct.textContent = `${totalPrice} руб.`
  }

  function clearActiveClassPerMeterPrice() {
    perMeterPriceItems.forEach(item => item.classList.remove('orange'))
  }
  function changePriceForProduct(item, product) {
    clearActiveClassPerMeterPrice()
    item.classList.add('orange')
    const perMeterPrice = item.getAttribute('per-meter-price')
    product.setAttribute('product-price', perMeterPrice)
  }

  function checkCountPrice(count) {
    if (!perMeterPriceItems.length) return false
    const perMeterPriceItem = productParent.querySelector(`[data-meter~="${count}"]`)
    if (perMeterPriceItem ) {
      changePriceForProduct(perMeterPriceItem, productParent)
    }
  }
  function plusConuter(input) {
    input.value = +input.value + 1
    const parentProduct = input.closest('.product-counter')
    const itemDOMelementDisplay = parentProduct.querySelector('span.counter-display-js');
    if (itemDOMelementDisplay) itemDOMelementDisplay.textContent = `${+input.value} М`
    renderPrice(input)
  }
  function minusCounter(input) {
    if (+input.value === 1) return false
    input.value = +input.value - 1
    const parentProduct = input.closest('.product-counter')
    const itemDOMelementDisplay = parentProduct.querySelector('span.counter-display-js');
    if (itemDOMelementDisplay) itemDOMelementDisplay.textContent = `${+input.value} М`
    renderPrice(input)
  }
  if (btnCounterPlus.length && btnCounterMinus.length) {
    btnCounterPlus.forEach(btnPlus => {
      btnPlus.addEventListener('click', (e) => {
        const inputDisplay = e.target.closest('.product-counter').querySelector('input[counter-input-js]')
        plusConuter(inputDisplay)
      })
    })
    btnCounterMinus.forEach(btnMinus => {
      btnMinus.addEventListener('click', (e) => {
        const inputDisplay = e.target.closest('.product-counter').querySelector('input[counter-input-js]')
        minusCounter(inputDisplay)
      })
    })
  }
})();
  document.body.addEventListener('click', (e) => {
  // selects disabled
  const select = e.target.closest('.select')
  if (!select && document.querySelector('.select.active')) {
    selects.forEach(item => {
      item.classList.remove('active')
    })
  }
  // to cart button
  const favBtn = e.target.closest('button[cart-btn]');
  const productLink = e.target.closest('a.product__img')
  if (productLink) {
    e.preventDefault()
    if (!favBtn) window.location.href = productLink.getAttribute('href')
  }
  // modal-buttons
  const modalBtn = e.target.closest('button[data-modal]');
  if(modalBtn) {
      const modalId = e.target.dataset.modal;
      const modal = document.querySelector(`#${modalId}`);
      modalOverlay.classList.add('active')
      showModal(modal)
  }
  // body-nav-close if tocuhpad
  if (!e.target.closest('.nav__list-item') && document.querySelector('.nav .nav__list-item[has-content] .body-nav.active')) {
    navLinkItems.forEach(item => item.classList.remove('active'))
    removeActiveClassBodyNav()
  }

})
;

  // hover btn-cart
  const productsContainerItems = document.querySelectorAll('[hover-products-js]')
  if(productsContainerItems.length) {
    productsContainerItems.forEach(container => {
      ['mouseover', 'mouseout'].forEach(myEvent => {
        container.addEventListener(myEvent, (e) => {
          const cartBtn = e.target.closest('button[cart-btn]')
          if (e.type === 'mouseover' && cartBtn && cartBtn.classList.contains('no-sales')) cartBtn.textContent = 'нет в наличии'
          else if (e.type === 'mouseout' && cartBtn && cartBtn.classList.contains('no-sales')) cartBtn.textContent = 'в корзину'
        })
      })
    })
  }

  // filter-button-mobile
  const filterBtn = document.querySelectorAll('button[btn-filter]')
  const filtersMenu = document.querySelector('.filters-menu')
  function toggleFiltersMenu() {
    filtersMenu.classList.toggle('active')
    document.body.classList.toggle('no-scroll')
  }
  if(filterBtn.length) {
    filterBtn.forEach(btn => {
      btn.addEventListener('click', toggleFiltersMenu)
    })
  }

  // main-search toggle
  const btnShowSearch = document.querySelector('button[show-form-search]');
  const mainSearchForm = document.querySelector('.main-search form');
  const overlay = document.querySelector('.overlay');
  if (btnShowSearch) {
    function toggleMainSearch() {
      mainSearchForm.classList.toggle('active')
      overlay.classList.toggle('active')
      document.body.classList.toggle('no-scroll')
    }
    btnShowSearch.addEventListener('click',toggleMainSearch)
    overlay.addEventListener('click',toggleMainSearch)
  }

  // show-content-by-change-checbkox
  const checboxInputs = document.querySelectorAll('input[show-content]')
  if (checboxInputs.length) {
    checboxInputs.forEach(input => {
      input.addEventListener('change', (e) => {
        const classHiddentContent = e.currentTarget.getAttribute('show-content')
        const currentHiddenContent = document.querySelector(`#${classHiddentContent}`)
        if (e.currentTarget.checked) {
          currentHiddenContent.classList.add('active')
        } else {
          currentHiddenContent.classList.remove('active')
        }
      })
    })
  }

  // js-tabs-cabinet

  const tabItems = document.querySelectorAll('[js-tab]')
  const tabContentItems = document.querySelectorAll('[js-tab-content]')
  if (tabItems.length) {
    function addActiveClassContent(index) {
      tabContentItems.forEach((content,idx) => {
        content.classList.remove('active')
        tabItems[idx].classList.remove('active')
      })
      tabContentItems[index].classList.add('active')
      hideOrdersContent()
      if (document.documentElement.clientWidth >= 768) {
        document.querySelector('.orders__table[hide-block-js]').style.display = 'flex'
      }
    }
    tabItems.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const indexContent = e.currentTarget.getAttribute('content-index')
        if (indexContent && !e.currentTarget.classList.contains('active')) {
          addActiveClassContent(indexContent)
          e.currentTarget.classList.add('active')
        }
      })
    })
  }


  // js-orders-click
  const ordersBtn = document.querySelectorAll('button[js-order]');
  const ordersContentItems = document.querySelectorAll('.info-order .info-order__content')
  function hideOrdersContent() {
    ordersContentItems.forEach((item) => {
      item.classList.remove('active')
    })
  }
  if (ordersBtn.length) {
    function showOrdersContent(idx) {
      hideOrdersContent()
      ordersContentItems[idx].classList.add('active')
    }
    ordersBtn.forEach(btn => {
      btn.addEventListener('click', (e) => {
        for (let i = 0; i < ordersBtn.length; i++) {
          if (e.currentTarget === ordersBtn[i]) {
            showOrdersContent(i)
          }
        }
        e.currentTarget.closest('.orders__table[hide-block-js]').style.display = 'none'
      })
    })
  }

})

$(function() {
  $('[hover-products-js]').on('click', function(e) {
    const $this = $(e.target.closest('.detail'));
    if ($this) {
      if ($this.find('.detail__content').hasClass('show')) {
          $this.find('.detail__content').removeClass('show');
          $this.find('.detail__content').slideUp(350);
          $this.find('button.toggle').removeClass('active')
      } else {
          $this.find('.detail__content').removeClass('show');
          $this.find('.detail__content').slideUp(350);
          $this.find('.detail__content').toggleClass('show');
          $this.find('.detail__content').slideToggle(350);
          $this.find('button.toggle').addClass('active')
      }
    }
  })
  // toggle-slide accordion
    $('button.toggle-slide').on('click', function(e) {
      e.preventDefault()
      const $this = $(this);
      if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
        $this.removeClass('active')
        if ($this.parent().hasClass('nav__list-item')) {
          $this.css({'margin-bottom': '0'})
        }
    } else {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
        $this.addClass('active')
        if ($this.parent().hasClass('nav__list-item')) {
          $this.css({'margin-bottom': '7px'})
        }
    }
    })
})