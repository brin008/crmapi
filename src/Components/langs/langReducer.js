import {getCookie, setCookie} from '../login/loginReducer'
import { InitialisAPI } from '../../api_newStore'

let ADD_LANG='ADD_LANG'
let TOGGLE_IS_FEATCHING='TOGGLE_IS_FEATCHING'
let SET_LANG='SET_LANG'

 


let x={VerificationCode: "Verification Code",
      Objects: "Объекты",
      Groups: "Группы",
      SignIn: "Вход", 
      SignUp: "Регистрация",
    LostPassword: "Забыли пароль?",
      BtnSignIn: "Войти",
      BtnSignUp: "Создать аккаунт",
      Confirm: "Подтвердить",
      Email: "Эл. адрес",
      Password: "Пароль",
      Fullname: "ФИО",
      EnterEmail: "Введите Эл. адрес",
      PasswordRecovery: "Восстановление пароля",
      Logout: "Выйти",
      AddObject: "Добавить объект",
      List: "Список",
      PersonalInformation: "Персональные данные",
      ChangePassword: "Смена пароля",
      VerifyEmail: "Подтвердить E-mail",
      ListByGroups: "Список по группам",
      BtnSave: "Сохранить",
      "ObjectType": "Тип объекта", 
      "SelectGroup": "Выберите группу",
      "Title": "Заглавие",
      "Imei": "Imei",
      "Delete": "Удалить",
      "Edit": "Редактировать",
      "ExecReport": "Выполнить отчет",
      "TrackForDay": "Трек за сутки",
      "BuildTrack": "Построить трек",
      "Watch": "Следить",
      "DeleteAlertTitle": "Удалять!",
      "DeleteAlertDescription": "Вы уверены, что хотите удалить?",
      "YesDeleteIt": "Удалить!",
      "Cancel": "Отменить",
      "BtnChangePassword": "Изменить пароль",
      "OldPassword": "Старый пароль",
      "RePassword": "Повторите новый пароль",
      "NewPassword": "Новый пароль",
      GeoObjects: "Геообъекты",
      "AddGeoZone": "Создать геозону",
      "EditObject": "Редактировать",
      "GeoZones": "Геозоны",
      "GeoPoints": "Геоточки",
      "Polygon": "Полигон",  
      "Circle": "Круг",
      Tracks: "Треки",
      "Language": "Язык",
      "AddGroup": "Добавить группу",
      "Add": "Добавить",
      "LogoutAlert": "Вы действительно хотите выйти?",
      "Save": "Cохранить",
      "RepeatPassword": "Повторите пароль",
      "Yes": "Да",
      "Build": "Построить",
      "Object": "Объект",
      "DateFrom": "From", 
      "DateTo": "To",
      "Countries": "Cтраны",
      "Coordinates": "Координаты",
      LastMessage: "Последнее сообщение",
      Speed: "Скорость",
      Information: "Информация",
      Status: "Статус",
      "LastDate": "Последнее свидание",
      "Year": "Год",
      "Month": "Месяц",
      "Day": "День",
      "Hour": "Час",
      "Minute": "Mин",
      "History": "История",
      Statistics: "Статистика ",
      "Search": "Поиск",
      "From": "От",
      "To": "Дo",
      "Min": "Mинут",
      Notifications: "Уведомления",
    Country: "Cтрана",
      "RulesAgree": "Я прочитал правила и согласен",
      "RulesAlert": "Вы не приняли правила",
      "Rules": "Правилa",
      "Icona": "Иконки",
      MainDescription: "Глобальное решение для отслеживания GPS",
      "About": "О нас",
      Contact: "Контакты",
      Buy: "Купить GPS",
      "RulesDesc": "description",
      "AcceptRules": "Я согласен с правилами",
      "Azcard": "Ежемесячно 3 подписки будут оплачиваться Azcard за каждую добавляемую вами машину. Если у вас есть какие-либо вопросы, звоните (+99455) 288-11-27.",
      "AddBalance": "Добавить в баланс",
      "Date": "Дата",
      "Time": "Время",
      "Balance": "Баланс",
      "AzcardCode": "Azcard код",
      "Address": "Адрес",
      "AzcardQuestion": "Как я могу получить Azcard?",
      "BuyAzcard": "Как купить Azcard?",
      "Settings": "Настройки",
      Deposit: "Пополнить баланс",
      Transactions: "Транзакции",
      "BuyGpsText": "Чтобы заказать GPS-оборудование, пожалуйста, свяжитесь с (+99455) 288-11-27.",
      "Icons": "Иконки",
      AboutDesc: "О нас",
      "ContactDesc": "Contact desc",
      "Duration": "Duration",
      "Distance": "Distance",
      "Notification": "Notification"
}




let initialState={
  lang: "en",
  langs:[],
  isFeatching:false,
  butLangName:'',
  translations:x

    }

export const langReduser=(state=initialState, action)=>{
  switch(action.type){
   
    case ADD_LANG:
      return{
        ...state, lang:action.lang,
        state,langs:action.langs
    }
    case TOGGLE_IS_FEATCHING:
      return{
        ...state, isFeatching:action.isFeatching
    }
    case SET_LANG:
      return{
        ...state, translations:action.translations,
        state,butLangName:action.butLangName ,
        state, lang:action.lang
    }
 
    
    default: return state
  } 
 
}
export const addLangAC=(lang, langs)=>({type:ADD_LANG,lang, langs})     
export const toggleIsFeatching=(isFeatching)=>({type:TOGGLE_IS_FEATCHING, isFeatching})  
export const SetLangAC=(translations, butLangName, lang)=>({type:SET_LANG, translations, butLangName, lang}) 

export const GetLang=(lang, token)=>{
  return(dispatch)=>{
    dispatch(toggleIsFeatching(true))
       InitialisAPI.langGetAPI(lang,token).
       then(data=>{
         dispatch(addLangAC(data.lang.short_code, data.langs))
         dispatch(toggleIsFeatching(false))
       })
  }
}
export const SetLang=(lang, token)=>{
  return(dispatch)=>{
    dispatch(toggleIsFeatching(true))
       InitialisAPI.langSetAPI(lang,token).
       then(data=>{
         dispatch(SetLangAC(data.lang_data, data.lang_name, data.lang))
         dispatch(toggleIsFeatching(false))
       })
  }
}
