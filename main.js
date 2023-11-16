let allques = document.querySelectorAll('.faqQuestion');
        console.log(allques);

        allques.forEach((v, index) => {
            v.addEventListener("click", () => {
                // console.log(index)

                v.nextElementSibling.classList.toggle("h-auto");
                v.nextElementSibling.classList.toggle("scale-y-100");
                v.nextElementSibling.classList.toggle("p-[20px]");
                v.children[1].classList.toggle("rotate-45");

                allques.forEach((el,i) => {
                    // console.log(i)
                    if ( i != index) {
                        console.log("hello")
                        el.nextElementSibling.classList.remove("h-auto");
                        el.nextElementSibling.classList.remove("scale-y-100");
                        el.nextElementSibling.classList.remove("p-[20px]");
                el.children[1].classList.remove("rotate-45");

                    }
                })

            })
        })