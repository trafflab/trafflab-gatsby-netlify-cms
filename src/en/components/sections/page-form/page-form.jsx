import * as React from "react"
import * as styles from './page-form.module.css';
import { LangContext, MessagesContext } from "../../../../utils/contexts";
import { sendFormToTg } from '../../../../utils/api'
import useForm  from '../../../../hooks/use-form'
import MediaImage from "../../ui/media-image/media-image";

import image from '../../../../images/page-form/page-form.png';
import image_480 from '../../../../images/page-form/page-form480.png';
import image_webp from '../../../../images/page-form/page-form.webp';
import image_480_webp from '../../../../images/page-form/page-form480.webp';

import BasicInput from "../../ui/basic-input/basic-input";

export default function PageForm() {

  const { values, handleChange, isValid, handleReset} = useForm()
  const [ momentWindow, setMomentWindow ] = React.useState({});
  const [sectonData, setSectonData] = React.useState({});
  const data = React.useContext(LangContext).pageForm;
  const successMessageHandler = React.useContext(MessagesContext);
  const handleSendClick = () => {
    sendFormToTg(values.name, values.tg)
      .then(res => {
        if (res.ok) {
          successMessageHandler()
          handleReset({name: '', tg: ''})
          momentWindow.yaCounter89406166.reachGoal('tg_form_click');
        }
      })
    // typeof window !== "undefined" && window.gtag("event", "click", { ...data })
  }

  React.useEffect(() => {
    setMomentWindow(window);
    values.phone = '';
    
  }, [])

  React.useEffect(() => {
    setSectonData(data)
  }, [data.lang])


  return (
    <section className={styles.pageForm}>
      <div className={styles.content}>
        
        <div className={styles.formContainer}>
          <div className={styles.textImg}>
            <MediaImage image_webp={sectonData.textImg__webp} image_480_webp={sectonData.textImg__webp} image={sectonData.textImg} image_480={sectonData.textImg} />
          </div>
          <p className={styles.text}>{sectonData.text}</p>
          <form className={styles.form}>
            <BasicInput
              name='name'
              placeholder={sectonData.nameInput}
              value={values.name}
              onChange={handleChange}
              minLength={1}
              isRequired={true}

            />
            <BasicInput
              name='tg'
              placeholder='Telegram'
              value={values.tg}
              onChange={handleChange}
              minLength={1}
              isRequired={true}
              
            />
            <button
              className={styles.sendButton}
              disabled={!isValid}
              // style={isValid ? {} : {backgroundColor: 'var(--color-gray-2)'}}
              type='button'
              onClick={handleSendClick}
            >
              <div className={styles.buttonIcon}/>
              <span className={styles.buttonText}>{sectonData.button480}</span>
            </button>
          </form>
        </div>

        <div className={styles.imageContainer}>
          <MediaImage image_webp={image_webp} image_480_webp={image_480_webp} image={image} image_480={image_480} />
        </div>

      </div>

    </section>
  )
}