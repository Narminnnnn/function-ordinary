// 1.---->  İstifadəçidən dairənin sahəsini hesablamaq üçün lazım olan dəyərləri alın.
// və bir function içində onun hesablanmasın yazın. (dairənin sahəsi S = πr^2)

// function daireninSahesi() {
//     let r = prompt("Dairenin radiusunu daxil edin");
//     let sahe = r*r*3;
// console.log(sahe);

// }
// daireninSahesi()

// 2.----> İstifadəçi iki ədəd daxil etsin. Həmin ədədlərin toplanmasını və vurulmasını həyata keçirən bir function yazın.
// function hesabla() {
//     let a = parseInt(prompt("reqem daxil edin"));
//     let b = parseInt(prompt("reqem daxil edin"));

//     console.log(a+b);
//     console.log(a*b);
// }
// hesabla()

// 3.----> Dörd rəqəmnli bir ədəd daxil edin. Həmin ədəddə 1-ci və 4-cü yerdə duran rəqəmlər  və eyni zamanda 2-ci və 3-cü yerdə duran rəqəmlər bir birinə bərabərdirsə bizə console log da "YES" əks halda "NO" yazdırsın
// Məsələn 6776 -- YES
//         8989 -- NO
//         6807 -- NO
//         9009 -- YES

// function dordreqemlieded(){
//     let number =prompt("dord reqemli eded daxil edin")
//     if (number.length != 4){
//         console.log("Dordreqemli eded daxil edin")

//         } else if (number[0]==number[3] && number[1]==number[2]){
//             console.log('Yes');

//         }else{
//             console.log("No");

//         }
//     }

// dordreqemlieded()

// 4.----> İstifadəçidən bir username alın. username daxil edildikdən sonra həmin istifadəçini salamlayan bir bildiriş pəncərəsi açılsın.
// Bunun üçün bir function-dan istifadə edin.

// function hello() {
//     let username = prompt("Username daxil edin")
//     alert(username+ " xos gelmisiniz")
// }
// hello()

// 5.----> Istifadəçidən bir ədəd daxil edin və həmin ədədin 100-dən böyük və ya kiçik olmasını eyni zamanda müsbət və mənfi olmasını və
// cüt və tək olmasını yoxlayan bir funksiya yazın. Sonda bizə bilidiriş şəklində ədəd haqqında məlumat göstərilisin Məsələn aşağıdakı kimi.
// (Console log istifadə etməyin)
// 1) 120 100-den boyukdur 2) 120 müsbətdir 3) 120 cütdür

// Əgər daxil etdiyimiz eded 100 və ya 0 olarsa onda yazdığımız funksiya işə düşmədən biza bildiriş olaraq
// "100 və 0 ədələrini daxil edə bilməzsiz" yazısını göstərsin. Şərtləri daxil edərkən tipə görədə yoxlayın.

// function checkNumber() {
//   let number = parseInt(prompt("Bir eded daxil edin"));
//   let message = `${number} reqemi haqqinda melumat;\n`;
//   if (number === 100 || number === 0) {
//     alert("100 və 0 ədələrini daxil edə bilməzsiz");
//     return;
//   }
//   if (number > 100) {
//     message += ` 1)  ${number}  100den boyukdur;\n`;
//   } else {
//     message += ` 1)  ${number} 100den kicikdir;\n`;
//   }
//   if (number >= 0) {
//     message += ` 2)  ${number}  musbetdir;\n`;
//   } else {
//     message += ` 2)  ${number} menfidir;\n`;
//   }
//   if (number % 2 === 0) {
//     message += ` 3)  ${number} cutdur;\n`;
//   } else {
//     message += ` 3)  ${number}  tekdir;\n`;
//   }
//   alert(message);
// }
// checkNumber();
