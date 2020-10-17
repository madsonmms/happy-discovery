//guardando as rotas das paginas para serem usadas no server

// passo 1 - icones = pega os datas do banco
const Database = require("./database/db")
const saveOrphanage = require("./database/saveOrphanage")

//exporta o modulo permitindo ser usado em outros codigos

module.exports = {
  index(request, response) {
    const city = request.query.city
    return response.render("index")
  },

  async orphanage(request, response) {
    const id = request.query.id

    try {
      const db = await Database
      const results = await db.all(`SELECT * FROM orphanages WHERE id = ${id} `)
      const orphanage = results[0]

      orphanage.images = orphanage.images.split(",")
      orphanage.firstImage = orphanage.images[0]

      // if (orphanage.open_on_weekends == "0") {
      //   orphanage.open_on_weekends = false
      // } else {
      //   orphanage.open_on_weekends = true
      // }

      //ternario
      orphanage.open_on_weekends == "0" ? orphanage.open_on_weekends = false : orphanage.open_on_weekends = true

      //pegar a posição 0 do array orphanage
      return response.render("orphanage", { orphanage })
    } catch (error) {
      console.log(error)
      return response.send("Erro no banco de dados!")
    }
  },

  async orphanages(request, response) {
    //passo 2 - icones = passa os icones no render da pagina {orphanages.hbs} usando o banco

    try {
      const db = await Database
      const orphanages = await db.all("SELECT * FROM orphanages")
      return response.render("orphanages", { orphanages })
    } catch (error) {
      console.log(error)
      return response.send("Erro no banco de dados!")
    }
  },

  createOrphanage(request, response) {
    return response.render("create-orphanage")
  },

  async saveOrphanage(request, response) {
    const fields = request.body

    if (Object.values(fields).includes("")) {
      return response.send("Todos os campos devem ser preenchidos!")
    }

    //salvar no banco de dados um orfanato
    try {
      const db = await Database
      await saveOrphanage(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        opening_hours: fields.opening_hours,
        opening_on_weekends: fields.opening_on_weekends,
      })

      //redireciona o usuario para a orphanages (mapinha)
      console.log(fields)
      
      return response.redirect("/orphanages")
    } catch (error) {
      response.send("Erro ao salvar dados!")
      console.log(error)
    }
  },
}
