# Loopback.io
Tutorial sobre Loopback.io para a APS 01 da Disciplina de Tópicos Avançados na Faculdade Senac Porto Alegre

## Tutorial de origem
Este exemplo é baseado no tutorial "Ionic & LoopBack Frameworks" escrito por *Valeri Karpov*
* [Parte 1 - Building a REST API](https://strongloop.com/strongblog/part-1-ionic-loopback-node-js-mobile/)
* [Parte 2 - Directives with the AngularJS LoopBack SDK](https://strongloop.com/strongblog/part-2-ionic-loopback-frameworks-directives-with-the-angularjs-loopback-sdk/)
* [Parte 3 - Building the Ionic App](https://strongloop.com/strongblog/part-3-ionic-loopback-frameworks-building-the-ionic-app/)
* [Parte 4 - Testing with Travis](https://strongloop.com/strongblog/part-4-ionic-loopback-frameworks-testing-with-travis/)


## Pre-requisitos
  - Node.js (npm)
  - Mongo DB

## Instação do Loopback
```
sudo npm install -g strongloop
```

## Configuração da aplicação
Com o Loopback.io previamente instalado é necessário executar o comando "slc loopback" que irá iniciar o projeto.
Informe o nome do projeto, neste caso "aps-01-API" e o tipo de aplicação "empty-server".

```
$ slc loopback
     _-----_
    |       |    .--------------------------.
    |--(o)--|    |  Let's create a LoopBack |
   `---------´   |       application!       |
    ( _´U`_ )    '--------------------------'
    /___A___\    
     |  ~  |     
   __'.___.'__   
 ´   `  |° ´ Y ` 

? What's the name of your application? aps-01-API
? What kind of application do you have in mind? 
  api-server (A LoopBack API server with local User auth) 
❯ empty-server (An empty LoopBack API, without any configured models or datasources) 
  hello-world (A project containing a basic working example, including a memory database) 
```

Para autenticação da aplicação será utilizado o Facebook, para isso é necessário a instalação de duas dependencias, conforme abaixo
```
npm install loopback-component-passport --save
npm install passport-facebook --save
```
> Opção "--save" irá adicionar no arquivo package.json como uma dependência.

## Crie os Models
Para este exemplo será utilizado Models diferentes do tutorial:
- **Category**: representa uma categoria de produto
- **Product**: representa um produto de uma categoria

###### Category

```
$ slc loopback:model
? Enter the model name: Category
? Select model's base class PersistedModel
? Expose Category via the REST API? Yes
? Custom plural form (used to build REST URL): Categories
? Common model or server only? server
Let's add some Category properties now.

Enter an empty property name when done.
? Property name: name
   invoke   loopback:property
? Property type: string
? Required? Yes
? Default value[leave blank for none]: 

Let's add another Category property.
Enter an empty property name when done.
? Property name: 

```

> Note que há as opções como /PersistedModel/, /Custom plural/, entre outras

###### Product

```
$ slc loopback:model
? Enter the model name: Product
? Select model's base class PersistedModel
? Expose Product via the REST API? Yes
? Custom plural form (used to build REST URL): Products
? Common model or server only? server
Let's add some Product properties now.

Enter an empty property name when done.
? Property name: name
   invoke   loopback:property
? Property type: string
? Required? Yes
? Default value[leave blank for none]: 

Let's add another Product property.
Enter an empty property name when done.
? Property name: price
   invoke   loopback:property
? Property type: number
? Required? Yes
? Default value[leave blank for none]: 

Let's add another Product property.
Enter an empty property name when done.
? Property name: categoryId
   invoke   loopback:property
? Property type: string
? Required? Yes
? Default value[leave blank for none]: 

Let's add another Product property.
Enter an empty property name when done.
? Property name: 
```
> Note que categoryId o tipo é string, isso pois a persistência será com Mongo DB e ele utiliza hash como Id.



## Relacionamento entre Models
Para criar os relaciomentos entre Models, utilize o comando "slc loopback:relation"

Na Model **Product**
```
$ slc loopback:relation
? Select the model to create the relationship from: Product
? Relation type: belongs to
? Choose a model to create a relationship with: Category
? Enter the property name for the relation: category
? Optionally enter a custom foreign key: categoryId
```

Na Model **Category**
```
$ slc loopback:relation
? Select the model to create the relationship from: Category
? Relation type: has many
? Choose a model to create a relationship with: Product
? Enter the property name for the relation: products
? Optionally enter a custom foreign key: categoryId
? Require a through model? No
```
