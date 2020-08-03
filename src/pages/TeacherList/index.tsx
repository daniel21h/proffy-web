import React from 'react'

import PageHeader from '../../components/PageHeader'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Horário</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img 
              src="https://api.adorable.io/avatars/285/abott@adorable.png" 
              alt="Avatar Adorable"
            />

            <div>
              <strong>John Doe</strong>
              <strong>Química</strong>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de química de química avançada.
            <br/><br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das
            pessoas através de experiências.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$70,00</strong>
            </p>

            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  )
}