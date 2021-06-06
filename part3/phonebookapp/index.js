const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
const morgan = require('morgan')
const Person = require('./models/person')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

app.use(morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms',
      JSON.stringify(req.body)
    ].join(' ')
  }))

  app.get('/info', (request, response) => {
    const currentDate = new Date().toLocaleString();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    Person.find({}).then(persons => {
        response.send(
            `
            <div>
                <p>Phonebook has info for ${persons.length} people</p>
            </div>
            <div>
                <p>${currentDate} (${timeZone})</p>
            </div>`
        )
        })
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons.map(person => person.toJSON()))
        })
})

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
    .then(person => {
        if (person) {
            response.json(person.toJSON())
          } else {
            response.status(404).end()
          }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
    const body = request.body

    const personName = body.name
    const personNumber = body.number

    if (Object.keys(body).length === 0) {
        return response.status(400).json({
          error: 'content missing'
        })
    }

    const person = new Person({
        name: personName,
        number: personNumber
        })

    person.save()
    .then(savedPerson =>  savedPerson.toJSON())
    .then(savedAndFormattedPerson => {
        console.log(`added ${person.name} number ${person.number} to phonebook`)
        response.json(savedAndFormattedPerson)
        })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body

    const person = {
      name: body.name,
      number: body.number,
    }

    Person.findByIdAndUpdate(request.params.id, person, { new: true })
      .then(updatedPerson => {
        response.json(updatedPerson.toJSON())
      })
      .catch(error => next(error))
  })

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
      }
      next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
// const requestLogger = (request, response, next) => {
//   console.log('Method:', request.method)
//   console.log('Path:  ', request.path)
//   console.log('Body:  ', request.body)
//   console.log('---')
//   next()
// }

// app.use(requestLogger)
// let  persons =  [
//     { 
//       id: 1,
//       name: 'Adam', 
//       number: "91234567809"
//     },
//     {
//       id: 2,
//       name: 'Arto', 
//       number: "45676112347"
//     },
//     {
//       id: 3,
//       name: 'Ma Yutao', 
//       number: "76436573858"
//     },
//     {
//       id: 4,
//       name: 'Dai Daisy', 
//       number: "12345678901"
//     },
//     {
//       id: 5,
//       name: 'Dan Abramoy', 
//       number: "34567890123"
//     }
//    ]
  
//   app.get('/', (request, response) => {
//     response.send('<h1>Hello World!</h1>')
//   })
  
//   app.get('/api/persons', (request, response) => {
//     response.json(persons)
//   })

//   const generateId = () => {
//     const maxId = persons.length > 0
//       ? Math.max(...persons.map(n => n.id))
//       : 0
//     return maxId + 1
//   }

//   app.post('/api/persons', (request, response) => {
//     const body = request.body
  
//     if (!body.content) {
//       return response.status(400).json({ 
//         error: 'content missing' 
//       })
//     }
  
//     const person = {
//       content: body.content,
//       important: body.important || false,
//       date: new Date(),
//       id: generateId(),
//     }
  
//     persons = persons.concat(person)
  
//     response.json(person)
//   })

//   app.delete('/api/persons/:id', (request, response) => {
//     const id = Number(request.params.id)
//     persons = persons.filter(person => person.id !== id)
  
//     response.status(204).end()
//   })

// app.get('/api/persons/:id', (request, response) => {
//     const id = Number(request.params.id)
//     const person = persons.find(person => person.id === id)
    
//     if (person) {
//       response.json(person)
//     } 
//     else {
//       response.status(404).end()
//     }
//   })
  
// //   app.post('/api/persons', (request, response) => {
// //     const person = request.body
// //     console.log(person)
// //     response.json(person)
// //   })
// const unknownEndpoint = (request, response) => {
//     response.status(404).send({ error: 'unknown endpoint' })
//   }
//   app.use(unknownEndpoint)
  
// const PORT = 8081
// app.listen(PORT)
// console.log(`Server running on port ${PORT}`)