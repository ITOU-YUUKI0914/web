/* ローディング画面 */

const loading = document.querySelector('#loading');
const loadingScreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load',()=>{
    loading.animate({
        opacity:[1,0],
        visibility:'hidden',
    },{
        duration:2000,
        delay:1200,
        easing:'ease',
        fill:'forwards',
    });

    loadingScreen.animate({
         translate:['0 100vh','0 0','0 -100vh'],
    },{
         duration:2000,
         delay:800,
         easing:'ease',
         fill:'forwards'
    });

    loadingText.animate([{
         opacity:1,
         offset:.8,
        },{
         opacity:0,
         offset:1,
        },
    ],{
         duration:1200,
         easing:'ease',
         fill:'forwards',
    });
});

/* コンセプト */

const consept = document.querySelectorAll('.midasi-text2');
console.log(consept);
const showconsept = (entries,obs) =>{
    const keyframes = {
        opacity:[0,1],
        translate:['0 50px',0],
    };

    const option = {
        duration:1000,
        easing:'ease',
        fill:'forwards',
    }
    entries[0].target.animate(keyframes,option);
    
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.animate(keyframes,option);
            obs.unobserve(entry.target);
        }
        
    });
};

//監視対象を発見する割合（８割）
const options = {
    threshold: 1,
};
const conseptObserver = new IntersectionObserver(showconsept,options);
conseptObserver.observe(consept[0]);

/* こだわりタイトル */

const kodawariTitle1 = document.querySelector('#kodawari-title1');

const showkodawariTitle1 = (entries,obs) =>{
    const keyframes = {
        opacity:[0,1],
        color:['transparent','#ffffff'],
        backgroundPosition:['100% 0','0 0'],
    };

    const option = {
        duration:1000,
        easing:'ease',
        fill:'forwards',
    }
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.animate(keyframes,option);
            obs.unobserve(entry.target);
        }
    });
};

const kodawariTitle1Observer = new IntersectionObserver(showkodawariTitle1,options);

kodawariTitle1Observer.observe(kodawariTitle1);

const kodawariTitle2 = document.querySelector('#kodawari-title2');

const showkodawariTitle2 = (entries,obs) =>{
    const keyframes = {
        opacity:[0,1],
        translate:['100px 0',0],
    };

    const option = {
        duration:1500,
        delay:200,
        easing:'ease',
        fill:'forwards',
    }

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.animate(keyframes,option);
            obs.unobserve(entry.target);
        }
        
    });
    
};

const kodawariTitle2Observer = new IntersectionObserver(showkodawariTitle2,options);

kodawariTitle2Observer.observe(kodawariTitle2);

/* こだわり内容 */
const kodawarinaiyo1 = document.querySelector('#kodawari-naiyo1');

const showkodawarinaiyo1 = (entries,obs) =>{
    const keyframes = {
        opacity:[0,1],
        translate:['0 50px',0],
    };

    const option = {
        duration:800,
        delay:200,
        easing:'ease',
        fill:'forwards',
    }

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.animate(keyframes,option);
            obs.unobserve(entry.target);
        }
        
    });
    
};

const kodawarinaiyoObserver1 = new IntersectionObserver(showkodawarinaiyo1,options);
kodawarinaiyoObserver1.observe(kodawarinaiyo1);

const kodawarinaiyo2 = document.querySelector('#kodawari-naiyo2');

const showkodawarinaiyo2 = (entries,obs) =>{
    const keyframes = {
        opacity:[0,1],
        translate:['0 50px',0],
    };

    const option = {
        duration:800,
        delay:200,
        easing:'ease',
        fill:'forwards',
    }

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.animate(keyframes,option);
            obs.unobserve(entry.target);
        }
        
    });
    
};

const kodawarinaiyoObserver2 = new IntersectionObserver(showkodawarinaiyo2,options);
kodawarinaiyoObserver2.observe(kodawarinaiyo2);

const kodawarinaiyo3 = document.querySelector('#kodawari-naiyo3');

const showkodawarinaiyo3 = (entries,obs) =>{
    const keyframes = {
        opacity:[0,1],
        translate:['0 50px',0],
    };

    const option = {
        duration:800,
        delay:200,
        easing:'ease',
        fill:'forwards',
    }

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.animate(keyframes,option);
            obs.unobserve(entry.target);
        }
        
    });
    
};

const kodawarinaiyoObserver3 = new IntersectionObserver(showkodawarinaiyo3,options);
kodawarinaiyoObserver3.observe(kodawarinaiyo3);
/* こだわり画像 */
const contentimg1 = document.querySelector('#content-img1'); 

const showcontentimg1 = (entries,obs) =>{
    const keyframes = {
        opacity:[0,1],
        translate:['100vh 0',0],
    };

    const option = {
        duration:1000,
        easing:'ease',
        fill:'forwards',
    }

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.animate(keyframes,option);
            obs.unobserve(entry.target);
        }
        
    });
    
};

const contentimgObserver1 = new IntersectionObserver(showcontentimg1,options);

contentimgObserver1.observe(contentimg1);

const contentimg2 = document.querySelector('#content-img2'); 

const showcontentimg2 = (entries,obs) =>{
    const keyframes = {
        opacity:[0,1],
        translate:['100vh 0',0],
    };

    const option = {
        duration:1000,
        easing:'ease',
        fill:'forwards',
    }

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.animate(keyframes,option);
            obs.unobserve(entry.target);
        }
        
    });
    
};

const contentimgObserver2 = new IntersectionObserver(showcontentimg2,options);

contentimgObserver2.observe(contentimg2);

const contentimg3 = document.querySelector('#content-img3'); 

const showcontentimg3 = (entries,obs) =>{
    const keyframes = {
        opacity:[0,1],
        translate:['100vh 0',0],
    };

    const option = {
        duration:1000,
        easing:'ease',
        fill:'forwards',
    }

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.animate(keyframes,option);
            obs.unobserve(entry.target);
        }
        
    });
    
};

const contentimgObserver3 = new IntersectionObserver(showcontentimg3,options);

contentimgObserver3.observe(contentimg3);

/* 商品紹介 */
const syouhinTitle = document.querySelector('#syouhin-title'); 

const showsyouhinTitle = (entries,obs) =>{
    const keyframes = {
        opacity:[0,1],
        translate:['100vh 0',0],
    };

    const option = {
        duration:1000,
        easing:'ease',
        fill:'forwards',
    }

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.animate(keyframes,option);
            obs.unobserve(entry.target);
        }
        
    });
    
};

const syouhinTitleObserver = new IntersectionObserver(showsyouhinTitle);

syouhinTitleObserver.observe(syouhinTitle);

/* 商品画像 */
const syouhinItem = document.querySelector('#syouhin-item'); 

const showsyouhinItem = (entries,obs) =>{
    const keyframes = {
        opacity:[0,1],
        translate:['0 100px', 0]
    };

    const option = {
        duration:1000,
        easing:'ease',
        fill:'forwards',
    }

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.animate(keyframes,option);
            obs.unobserve(entry.target);
        }
        
    });
    
};

const syouhinItemObserver = new IntersectionObserver(showsyouhinItem);

syouhinItemObserver.observe(syouhinItem);

/* 商品説明 */
const syohinP = document.querySelector('#syohin-p'); 

const showsyohinP = (entries,obs) =>{
    const keyframes = {
        opacity:[0,1],
        translate:['0 100px', 0]
    };

    const option = {
        duration:1000,
        easing:'ease',
        fill:'forwards',
    }

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.animate(keyframes,option);
            obs.unobserve(entry.target);
        }
        
    });
    
};

const syohinPObserver = new IntersectionObserver(showsyohinP,options);

syohinPObserver.observe(syohinP);

/* SINE */
const syouhinTitle2 = document.querySelector('#syohin2-title'); 

const showsyouhinTitle2 = (entries,obs) =>{
    const keyframes = {
        opacity:[0,1],
        translate:['0 50px', 0]
    };

    const option = {
        duration:1000,
        easing:'ease',
        fill:'forwards',
    }

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.animate(keyframes,option);
            obs.unobserve(entry.target);
        }
        
    });
    
};

const syouhinTitleObserver2 = new IntersectionObserver(showsyouhinTitle2,options);

syouhinTitleObserver2.observe(syouhinTitle2);

const syouhinSub2 = document.querySelector('#syohin2-sub'); 

const showsyouhinSub2 = (entries,obs) =>{
    const keyframes = {
        opacity:[0,1],
        translate:['0 50px', 0]
    };

    const option = {
        duration:1000,
        easing:'ease',
        fill:'forwards',
    }

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.animate(keyframes,option);
            obs.unobserve(entry.target);
        }
        
    });
    
};

const syouhinSub2Observer2 = new IntersectionObserver(showsyouhinSub2,options);

syouhinSub2Observer2.observe(syouhinSub2);

/* SINSE画像 */
const sinseImg1 = document.querySelector('#sinse-img1'); 

const showsinseImg1 = (entries,obs) =>{
    const keyframes = {
        opacity:[0,1],
        translate:['-50px 0', 0]
    };

    const option = {
        duration:1000,
        easing:'ease',
        fill:'forwards',
    }

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.animate(keyframes,option);
            obs.unobserve(entry.target);
        }
        
    });
    
};

const sinseImg1Observer2 = new IntersectionObserver(showsinseImg1,options);

sinseImg1Observer2.observe(sinseImg1);

const sinseImg2 = document.querySelector('#sinse-img2'); 

const showsinseImg2 = (entries,obs) =>{
    const keyframes = {
        opacity:[0,1],
        translate:['0 50px', 0]
    };

    const option = {
        duration:1000,
        easing:'ease',
        fill:'forwards',
    }

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.animate(keyframes,option);
            obs.unobserve(entry.target);
        }
        
    });
    
};

const sinseImg2Observer2 = new IntersectionObserver(showsinseImg2,options);

sinseImg2Observer2.observe(sinseImg2);

const sinseImg3 = document.querySelector('#sinse-img3'); 

const showsinseImg3 = (entries,obs) =>{
    const keyframes = {
        opacity:[0,1],
        translate:['50px 0', 0]
    };

    const option = {
        duration:1000,
        easing:'ease',
        fill:'forwards',
    }

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.animate(keyframes,option);
            obs.unobserve(entry.target);
        }
        
    });
    
};

const sinseImg3Observer2 = new IntersectionObserver(showsinseImg3,options);

sinseImg3Observer2.observe(sinseImg3);

/* SINSE説明 */
const sinsetext1 = document.querySelector('#sinse-text1'); 

const showsinsetext1 = (entries,obs) =>{
    const keyframes = {
        opacity:[0,1],
        translate:['0 50px', 0]
    };

    const option = {
        duration:1000,
        easing:'ease',
        fill:'forwards',
    }

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.animate(keyframes,option);
            obs.unobserve(entry.target);
        }
        
    });
    
};

const sinsetext1Observer2 = new IntersectionObserver(showsinsetext1,options);

sinsetext1Observer2.observe(sinsetext1);

const sinsetext2 = document.querySelector('#sinse-text2'); 

const showsinsetext2 = (entries,obs) =>{
    const keyframes = {
        opacity:[0,1],
        translate:['0 50px', 0]
    };

    const option = {
        duration:1000,
        easing:'ease',
        fill:'forwards',
    }

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.animate(keyframes,option);
            obs.unobserve(entry.target);
        }
        
    });
    
};

const sinsetext2Observer2 = new IntersectionObserver(showsinsetext2,options);

sinsetext2Observer2.observe(sinsetext2);

const sinsetext3 = document.querySelector('#sinse-text3'); 

const showsinsetext3 = (entries,obs) =>{
    const keyframes = {
        opacity:[0,1],
        translate:['0 50px', 0]
    };

    const option = {
        duration:1000,
        easing:'ease',
        fill:'forwards',
    }

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.animate(keyframes,option);
            obs.unobserve(entry.target);
        }
        
    });
    
};

const sinsetext3Observer2 = new IntersectionObserver(showsinsetext3,options);

sinsetext3Observer2.observe(sinsetext3);

//モバイル版　メニューボタン

const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuOptions = {
    duration: 1400,
    easing: 'ease',
    fill: 'forwards',
};

menuOpen.addEventListener('click',() => {
    menuPanel.animate({translate:['100vw', 0]}, menuOptions);
});

menuClose.addEventListener('click',() => {
    menuPanel.animate({translate: [0, '100vw']}, menuOptions);
});