//tabla pedido

//creacion de tablas(PEDIDO)

db.Pedido.insert({cod_pedido: 300, conductor_designado: "Abad Abad Santos Victor", fecha_envio: "15/11/2021", tipo_producto: "textil", estado: "entregado", clave_conductor: 500});
db.Pedido.insert({cod_pedido: 301, conductor_designado: "Advincula Lopez Pedro Manuel", fecha_envio: "24/11/2021", tipo_producto: "alimentacion", estado: "entregado", clave_conductor: 501});
db.Pedido.insert({cod_pedido: 302, conductor_designado: "Aguero Sifuentes Orester", fecha_envio: "25/11/2021", tipo_producto: "maquinaria", estado: "entregado", clave_conductor: 502});
db.Pedido.insert({cod_pedido: 303, conductor_designado: "Aguero Sifuentes Raul Carlos", fecha_envio: "4/12/2021", tipo_producto: "maquinaria", estado: "entregado", clave_conductor: 503});
db.Pedido.insert({cod_pedido: 304, conductor_designado: "Alcarraz Palomino Wilson", fecha_envio: "27/11/2021", tipo_producto: "maquinaria", estado: "entregado", clave_conductor: 504});
db.Pedido.insert({cod_pedido: 305, conductor_designado: "Angel Aedo GianCarlo", fecha_envio: "28/11/2021", tipo_producto: "maquinaria", estado: "entregado", clave_conductor: 505});
db.Pedido.insert({cod_pedido: 306, conductor_designado: "Angulo Saldaña Jose Elmerson", fecha_envio: "29/11/2021", tipo_producto: "maquinaria", estado: "entregado", clave_conductor: 506});
db.Pedido.insert({cod_pedido: 307, conductor_designado: "Blas Vega Eber Damaceno", fecha_envio: "22/11/2021", tipo_producto: "textil", estado: "entregado", clave_conductor: 507});
db.Pedido.insert({cod_pedido: 308, conductor_designado: "Camacho Saenz Victor Alfredo", fecha_envio: "6/12/2021", tipo_producto: "metalurgia", estado: "en curso", clave_conductor: 508});
db.Pedido.insert({cod_pedido: 309, conductor_designado: "Cancio Leon Juan", fecha_envio: "4/12/2021", tipo_producto: "construccion", estado: "en curso", clave_conductor: 509});
db.Pedido.insert({cod_pedido: 310, conductor_designado: "Carbajal Chavez Gregorio", fecha_envio: "16/12/2021", tipo_producto: "construccion", estado: "entregado", clave_conductor: 510});
db.Pedido.insert({cod_pedido: 311, conductor_designado: "Chavez Escalante Juan", fecha_envio: "4/12/2021", tipo_producto: "construccion", estado: "en curso", clave_conductor: 511});
db.Pedido.insert({cod_pedido: 312, conductor_designado: "Chavez Flores Ruben", fecha_envio: "7/12/2021", tipo_producto: "construccion", estado: "entregado", clave_conductor: 512});
db.Pedido.insert({cod_pedido: 313, conductor_designado: "Contreras Choccari Edmundo", fecha_envio: "6/12/2021", tipo_producto: "construccion", estado: "entregado", clave_conductor: 513});
db.Pedido.insert({cod_pedido: 314, conductor_designado: "Cristobal Socualaya Mijael Angel", fecha_envio: "15/12/2021", tipo_producto: "construccion", estado: "entregado", clave_conductor: 514});
db.Pedido.insert({cod_pedido: 315, conductor_designado: "Durand Romani Linder", fecha_envio: "16/12/2021", tipo_producto: "construccion", estado: "entregado", clave_conductor: 515});
db.Pedido.insert({cod_pedido: 316, conductor_designado: "Escobar Machuca Emiliano", fecha_envio: "7/12/2021", tipo_producto: "aparatos electronicos", estado: "en curso", clave_conductor: 516});
db.Pedido.insert({cod_pedido: 317, conductor_designado: "Flores Castilla Jose Luis", fecha_envio: "28/11/2021", tipo_producto: "aparatos electronicos", estado: "en curso", clave_conductor: 517}); 
db.Pedido.insert({cod_pedido: 318, conductor_designado: "Gutierrez Saravia Walter Freddy", fecha_envio: "11/12/2021", tipo_producto: "aparatos electronicos", estado: "en curso", clave_conductor: 518});
db.Pedido.insert({cod_pedido: 319, conductor_designado: "Huaman Ramos Efrain", fecha_envio: "12/12/2021", tipo_producto: "metalurgia", estado: "en curso", clave_conductor: 519});
db.Pedido.insert({cod_pedido: 320, conductor_designado: "Huamani Cordova Cristian Jesus", fecha_envio: "6/12/2021", tipo_producto: "metalurgia", estado: "en curso", clave_conductor: 520});

//leer las tablas creadas

db.Pedido.find()

//leer por tipo_producto

db.Pedido.find({tipo_producto:"metalurgia"})

db.Pedido.find({tipo_producto:"textil"})

db.Pedido.find({tipo_producto:"maquinaria"})

db.Pedido.find({tipo_producto:"construccion"})

// condiciones OR

db.Pedido.find({$or:[{tipo_producto: "metalurgia"}, {tipo_producto: "aparatos electronicos" }]});

// actualizar tablas Creadas

db.Pedido.update({cod_pedido:{$eq: 319}},{$set:{cod_pedido:321}});


db.Pedido.update({cod_pedido:{$eq: 321}},{$set:{cod_pedido:319}});

////////////////////////////////////////////////////////////////////////////

db.Pedido.update({clave_conductor:{$eq: 519}},{$set:{clave_conductor:522}});

db.Pedido.update({clave_conductor:{$eq: 522}},{$set:{clave_conductor:519}});

// eliminar tablas creadas

db.Pedido.insert({cod_pedido: 325, conductor_designado: "Huamani Cordova Cristian Diego", fecha_envio: "8/12/2023", tipo_producto: "metalurgia", estado: "en curso", clave_conductor: 525});

db.Pedido.find()

db.Pedido.remove({cod_pedido:{$eq:325}});

db.Pedido.drop();



































