import React from 'react'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import PageHeader from '../../components/PageHeader'

import './styles.css'

export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
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

          <Select 
            name="subject" 
            label="Matéria" 
            options={[
              { value:'0', label: 'Domingo' },
              { value:'1', label: 'Segunda-feira' },
              { value:'2', label: 'Terça-feira' },
              { value:'3', label: 'Quarta-feira' },
              { value:'4', label: 'Quinta-feira' },
              { value:'5', label: 'Sexta-feira' },
              { value:'6', label: 'Sábado' },
            ]}
          />

          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}