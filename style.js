var song1 ="audio1.mp3"
var song2 ="audio2.mp3"
var song3 ="audio3.mp3"
var songToPlay1 = new Audio(song1)
var songToPlay2 = new Audio(song2)
var songToPlay3 = new Audio(song3)

const cal = () => {
    let loveCal = Math.round(Math.random()*99)
    if (firstName.value === '' || secondName.value === '') {
        result.style.display = "block"
        dispCal.style.display = 'none'
        result.innerHTML = `<p class='p-3'>Stop Disturbing your self!!!, if you don't put Names it won.t work </p>`
    } else {
            if(loveCal >= 0 && loveCal < 30){
                result.style.display = "block"
                result.innerHTML = `<p class='p-3'>Hey!! <span style='color:#FFC83D' class='fw-bold'>${firstName.value}</span>, if you love your life. Run form <span style='color:#f23f3f'>${secondName.value}</span> you guys can never be together😭</p>`
                dispCal.style.display = 'block'
                dispCal.style.color = '#f23f3f'
                dispCal.innerHTML =`<p class='text-center'>${loveCal}%Match</p> `
                songToPlay3.play()
                setTimeout(() => {
                    songToPlay3.pause()
                }, 9000);

            } else if(loveCal >= 30 && loveCal < 65){
                result.style.display = "block"
                result.innerHTML = `<p class='p-3'>Hi  <span style='color:#FFC83D' class='fw-bold'>${firstName.value}</span>,so sad😥 <span style='color:#f23f3f'>${secondName.value}</span> is just using scope for you, your relationship can never work</p>`
                dispCal.style.display = 'block'
                dispCal.style.color = '#f23f3f'
                dispCal.innerHTML = `<p class='text-center'>${loveCal}%Match</p>`
                songToPlay1.play()
                setTimeout(() => {
                    songToPlay3.pause()
                }, 9000);
            } else if(loveCal >= 65 && loveCal < 80){
                result.style.display = "block"
                result.innerHTML = `<p class='p-3'>Hi <span style='color:#FFC83D' class='fw-bold'>${firstName.value}</span>,<span style='color:#f23f3f'>${secondName.value}</span> Really Love you but i cant say maybe the love is real.I will advices you to distant yourself from ${secondName.value}  for some time</p>`
                dispCal.style.display = 'block'
                dispCal.style.color = '#f23f3f'
                dispCal.innerHTML = `<p class='text-center'>${loveCal}%Match</p>`
                songToPlay2.play()
                setTimeout(() => {
                    songToPlay3.pause()
                }, 9000);
            } else if(loveCal >= 80 && loveCal <= 100){
                result.style.display = "block"
                result.innerHTML = `<p class='p-3'>Hello <span style='color:#FFC83D' class='fw-bold'>${firstName.value}</span>, Congratulation. <span style='color:#f23f3f'>${secondName.value}</span> is  <span style='#f23f3f'>${loverCal.value}%</span> of being your soul mate</p>`
                dispCal.style.display = 'block'
                dispCal.style.color = '#f23f3f'
                dispCal.innerHTML = `<p class='text-center'>${loveCal}%Match</p>`
                songToPlay2.play()
                setTimeout(() => {
                    songToPlay3.pause()
                }, 9000);
            }  
            
        }
        document.getElementById('firstName').value = ""
        document.getElementById('secondName').value = ""
    }
    
    

















      // disp.style.display='block'
    // if (firstName.value === '' || secondName.value === '') {
    //     alert('why nah')
    // }
    //     else if (calcu >= 0 && calcu < 40) {
    //             disp.style.display='block'
    //                disp.innerHTML = calcu
    //               result.innerHTML = "alayemhi"
    //            }else if(calcu >= 40  && calcu < 60){
    //             disp.style.display='block'
    //             disp.innerHTML = calcu
    //               result.innerHTML = "bossman"
    //            } else if(calcu >= 60  && calcu <= 100){
    //             disp.style.display='block'
    //             disp.innerHTML = calcu
    //             result.innerHTML = "gbayii"
    //            }else{
    //             alert("no be so")
    //            }

    // disp.style.display='block'
    // document.getElementById('disp').innerHTML = calcu
    //  result.style.display ='block'

    //     } else if(calcu.innerHTML <= 30){
    //         alert('oknah')
    //     }
    //     else if(calcu.innerHTML <= 60){
    //         alert('oknah')
    //     }
        
    //     else if(calcu.innerHTML <= 100){
    //         disp.style.display='block'
    //         document.getElementById('disp').innerHTML = calcu
    //          result.style.display ='block'
    //     }
    // }
    //  document.getElementById('firstName').value = ''
    //  document.getElementById('secondName').value = ''
    //  setTimeout(() => {
    //     result.style.display ='none'
    //     disp.style.display='none'
    // }, 3000);




    

