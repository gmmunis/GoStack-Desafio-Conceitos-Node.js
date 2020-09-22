<h1>🚀 Sobre o desafio</h1><br>
Nesse desafio, você deve criar uma aplicação para treinar o que você aprendeu até agora no Node.js!

Essa será uma aplicação para armazenar repositórios do seu portfólio, que irá permitir a criação, listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber "likes".

<h3>Rotas da aplicação</h3><br>

<b>POST /repositories:</b> A rota deve receber title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: { id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }; Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0.

<b>GET /repositories:</b> Rota que lista todos os repositórios;

<b>PUT /repositories/:id:</b> A rota deve alterar apenas o title, a url e as techs do repositório que possua o id igual ao id presente nos parâmetros da rota;

<b>DELETE /repositories/:id:</b> A rota deve deletar o repositório com o id presente nos parâmetros da rota;

<b>POST /repositories/:id/like:</b> A rota deve aumentar o número de likes do repositório específico escolhido através do id presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;

<b>Dica:</b> Acima utilizamos POST em uma rota, mesmo ela alterando o número de likes do repositório sem criar nada diretamente.

Se dividirmos semânticamente as responsabilidades da nossa aplicação em entidades, o like seria uma entidade, e repository seria outra entidade.

Com essa separação, temos diferentes regras de negócio para cada entidade, assim, ao chamar a rota de like e adicionamos apenas um like, podemos interpretar que estamos criando um novo like, e não atualizando os likes.

Então por que não usar PUT no lugar de POST? Justamente por estarmos "criando" UM novo like, e não atualizando o número de likes para qualquer outro valor.

Talvez fique difícil enxergar por ser apenas um número, mas pense que cada like seja salvo em uma tabela no banco junto do usuário que realizou esse like. Agora fica mais claro que você está criando um novo like, certo?

Bons estudos <3

<h3>Específicação dos testes</h3>
Em cada teste, tem uma breve descrição no que sua aplicação deve cumprir para que o teste passe.

Para esse desafio temos os seguintes testes:

<b>should be able to create a new repository:</b> Para que esse teste passe, sua aplicação deve permitir que um repositório seja criado, e retorne um json com o projeto criado.

<b>should be able to list the repositories:</b> Para que esse teste passe, sua aplicação deve permitir que seja retornado um array com todos os repositórios que foram criados até o momento.

<b>should be able to update repository:</b> Para que esse teste passe, sua aplicação deve permitir que sejam alterados apenas os campos url, title e techs.

<b>should not be able to update a repository that does not exist:</b> Para que esse teste passe, você deve validar na sua rota de update se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status 400.

<b>should not be able to update repository likes manually:</b> Para que esse teste passe, você não deve permitir que sua rota de update altere diretamente os likes desse repositório, mantendo o mesmo número de likes que o repositório já possuia antes da atualização. Isso porque o único lugar que deve atualizar essa informação é a rota responsável por aumentar o número de likes.

<b>should be able to delete the repository:</b> Para que esse teste passe, você deve permitir que a sua rota de delete exclua um projeto, e ao fazer a exclusão, ele retorne uma resposta vazia, com status 204.

<b>should not be able to delete a repository that does not exist:</b> Para que esse teste passe, você deve validar na sua rota de delete se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status 400.

<b>should be able to give a like to the repository:</b> Para que esse teste passe, sua aplicação deve permitir que um repositório com o id informado possa receber likes. O valor de likes deve ser incrementado em 1 a cada requisição, e como resultado, retornar um json contendo o repositório com o número de likes atualizado.

<b>should not be able to like a repository that does not exist:</b> Para que esse teste passe, você deve validar na sua rota de like se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status 400.

📆 Entrega
Esse desafio deve ser entregue a partir da plataforma Skylab, envie o link do repositório que você fez suas alterações. Após concluir o desafio, fazer um post no Linkedin e postar o código no Github é uma boa forma de demonstrar seus conhecimentos e esforços para evoluir na sua carreira para oportunidades futuras.

📝 Licença
Esse projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
