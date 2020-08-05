import React from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'

export default function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo é preencher esse formulário de inscrição."
     />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select 
            name="subject" 
            label="Matéria" 
            options={[
              { value:'Artes', label: 'Artes' },
              { value:'Biologia', label: 'Biologia' },
              { value:'Inglês', label: 'Artes' },
              { value:'Matemática', label: 'Matemática' },
              { value:'Física', label: 'Física' },
              { value:'Química', label: 'Química' },
              { value:'Geografia', label: 'Geografia' },
              { value:'História', label: 'História' },
              { value:'Educação Física', label: 'Educação Física' },
              { value:'Português', label: 'Português' },
              { value:'Sociologia', label: 'Sociologia' },
              { value:'Filosofia', label: 'Filosofia' },
            ]}
          />

          <Input name="cost" label="Custo da sua hora/aula" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br/>
          </p>

          <button type="button">Salvar cadastro</button>
        </footer>
     </main>
    </div>
  )
}