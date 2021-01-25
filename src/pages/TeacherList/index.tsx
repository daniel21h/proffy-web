import React, { useState, FormEvent, useMemo } from 'react'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'
import api from '../../services/api'

import PageHeader from '../../components/PageHeader'

import './styles.css'

export default function TeacherList() {
  const [teachers, setTeachers] = useState([])
  const [allTeachers, setAllTeachers] = useState([])

  const [subject, setSubject] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')

  async function searchTeachers(e: FormEvent) {
    e.preventDefault()

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    })

    setTeachers(response.data)
  }

  useMemo(() => {
    async function searchAllTeachers() {
      const response = await api.get('classes/all')

      setAllTeachers(response.data)
      console.log('Indo')
    }

    searchAllTeachers()
  }, [])

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select 
            name="subject" 
            label="Matéria" 
            value={subject}
            onChange={e => { setSubject(e.target.value) }}
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
            value={week_day}
            onChange={e => { setWeek_day(e.target.value) }}
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

          <Input 
            type="time" 
            name="time" 
            label="Hora"
            value={time}
            onChange={e => { 
              setTime(e.target.value) }}
          />

          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}

        {allTeachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </div>
  )
}
