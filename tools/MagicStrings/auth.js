//*REGISTER
const register = {
    registerGenelHata: "Kayıt işlemi sırasında bir hata meydana geldi",
    emailZatenVar: "Bu email ile kayıtlı bir hesap zaten var, farklı bir mail adresi ile kayıt olmayı deneyin",
    usernameZatenVar: "Bu kullanıcı adı ile kayıtlı bir hesap zaten var, farklı bir kullanıcı adı ile kayıt olmayı deneyin",
    parolaKisa: "Parolanız 6 karakterden daha az olamaz",
    zorunluAlanlarBos:"Zorunlu alanların tamamı doldurulmamış",
    registerBasarili:"Kayıt işlemi başarılı bir şekilde tamamlandı"
}

//*LOGIN
const login = {
    loginGenelHata: "Giriş işlemi sırasında bir hata meydana geldi",
    kullaniciBulunamadi: "Böyle bir kullanıcı bulunamadi",
    parolanizYanlis: "Parolanız yanlış",
    loginBasarili:"Giriş başarılı"

}


module.exports = { register, login }