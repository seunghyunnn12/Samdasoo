window.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const menuOpenBtn = document.querySelector('.menu-open')
  const body = document.querySelector('body')
  const langBtn = document.querySelector('.lang-wrap>dt')

  const navList = document.querySelectorAll('nav ul li')
  const section = document.querySelectorAll('#section-wrap>section')
  const scrollUpBtn = document.querySelector('.scroll-up')


  scrollUpBtn.addEventListener('click',()=>{
     gsap.to(window, {
        scrollTo: {
          y: 0
        }
      })
  })

  let pageNum = 0
  const totalNum = section.length


  navList.forEach(function (nav, index) {


    nav.addEventListener('click', function (e) {
      e.preventDefault()
      for (let i = 0; i < totalNum; i++) {
        navList[i].classList.remove('active')
      }
      navList[index].classList.add('active')
      gsap.to(window, {
        scrollTo: {
          y: '#s' + index
        }
      })
    })
  })





  function pageChangeFunc() {
    for (let i = 0; i < totalNum; i++) {
      navList[i].classList.remove('active')
      section[i].classList.remove('active')
      body.classList.remove('act-'+i)
    }

    section[pageNum].classList.add('active')
    navList[pageNum].classList.add('active')
   
    body.classList.add('act-' + pageNum)
  }



  let funcObj = {
    f_0: function () {
      console.log(0);

    },
    f_1: function () {
      console.log(1);

    },
    f_2: function () {
      console.log(2);

    },
    f_3: function () {
      console.log(3);

    },
  }




  funcObj['f_0']()



  window.addEventListener('scroll', function () {

    let scroll = window.scrollY || window.pageYOffset

    // console.log(scroll)

    for (let i = 0; i < totalNum; i++) {
      if (scroll > section[i].offsetTop - window.outerHeight / 6 &&
        scroll < section[i].offsetTop - window.outerHeight / 6 + section[i].offsetHeight) {
        pageNum = i
        funcObj['f_'+i]()
      }
    }
    pageChangeFunc()

  })




  langBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const target = document.querySelector('.lang-wrap dd')

    if (getComputedStyle(target).display === 'none') {

      target.style.display = "block"

      gsap.to(target, {
        opacity: 1,
        duration: .5,
        ease: "power2.out"
      })

    } else {

      gsap.to(target, {
        opacity: 0,
        duration: .5,
        ease: "power2.out",
        onComplete: () => {

          target.style.display = "none"
        }
      })



    }




  })




  menuOpenBtn.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.toggle('modalNav-Open')
  })


})