# <h1 align="center">NPS</h1>

<h4 align="center">NPS API (Net Promoter Score) <br>Calculation of the NPS of a company, in which it is provided based on the evaluation of the users. The company can calculate the NPS for the diverses subjects it selects. <a href="#about">Learn more</a></h4>

<p align="center">
    <img src="https://github.com/FelipePDS/nps/blob/master/.github/images/email-banner.png"/>
</p>

<p align="center">
    <a href=""><img src="https://img.shields.io/github/license/FelipePDS/nps"></a> 
    <img src="https://img.shields.io/static/v1?label=status&message=refactoring&color=yellow&style=flat&logo=reverbNation&logoColor=white"/>
    <img src="https://img.shields.io/github/last-commit/FelipePDS/nps"><br>
    <img src="https://img.shields.io/static/v1?label=server&message=express+|+ts-node&color=3178C6&style=flat&logo=express&logoColor=white">
    <img src="https://img.shields.io/static/v1?label=node&message=v12.18.0&color=339933&style=flat&logo=node.js&logoColor=white"> 
    <img src="https://img.shields.io/static/v1?label=npm&message=v6.14.4&color=CB3837&style=flat&logo=npm&logoColor=white"> 
    <img src="https://img.shields.io/static/v1?label=yarn&message=v1.22.5&color=2C8EBB&style=flat&logo=yarn&logoColor=white"><br>
    <img src="https://img.shields.io/github/forks/FelipePDS/nps?style=social">
    <img src="https://img.shields.io/github/stars/FelipePDS/nps?style=social">
</p>

<br>

<h2>:pushpin: Topics</h2>
<ul>
    <li><a href="#project">:bulb: Project</a></li>
    <ul>
        <li><a href="#about">:thought_balloon: About</a></li>
        <ul>
            <li><a href="#how-it-works-the-api">Example of How it Works</a></li>
        </ul>
        <li><a href="#techs">:computer: Techs</a></li>
        <ul>
            <li><a href="#techs-backend">Backend</a></li>
            <li><a href="#techs-for-dev">For Dev</a></li>
        </ul>
        <li><a href="#use-api">:speech_balloon: Use API</a></li>
        <ul>
            <li><a href="#how-to-clone-the-api">:open_file_folder: How to Clone</a></li>
            <li><a href="#how-to-configure-the-api">:wrench: How to Configure</a></li>
            <li><a href="#how-to-run-the-api">:key: How to Run</a></li>
        </ul>
    </ul>
    <li><a href="#documentation">:books: Documentation (to learn about developing an API)</a></li>
    <ul>
        <li><a href=""></a></li>
    </ul>
    <li><a href="#references">:anchor: References (materials)</a></li>
    <li><a href="#author">:man: Author</a></li>
    <li><a href="#license">:bookmark_tabs: License</a></li>
</ul>

<br>

<h1 id="project">:bulb: Project</h1>
<p>know the project, the technologies used for its construction and if you want to use the API, see how to use it.</p><br>

<h2 id="about">:thought_balloon: About</h2>
<p>
    The construction of this NPS API (Net Promoter Score) was to facilitate the evaluation process of a company for example. This questionnaire will be sent to the user's e-mail (which may have the text and style you want), where he will give his rating in relation to the subject and thus the NPS will be calculated based on the evaluation of all users. <br><br>
    The process is based on 3 things as a basis: <br>
    :bust_in_silhouette: :mag: :star: The survey, the user, and the user evaluation, <br>
    Survey email for evaluation (Title and description) → User → User evaluation → Saved evaluation correlating the user, the survey and the evaluation → Total NPS calculation, see an example:
</p>

<h3 id="how-it-works-the-api">Example of How it Works</h3>
<p>
    <img src="https://github.com/FelipePDS/nps/blob/master/.github/gif/example-of-it-works.gif"/>
</p>

<br>

<h2 id="techs">:computer: Techs</h2>

<h3 id="techs-backend">Backend</h3>
<ul>
    <li>Codes: <a href="https://nodejs.org/">Node.js</a> && <a href="https://www.typescriptlang.org/">Typescript</a> → <kbd><a href="https://www.npmjs.com/package/ts-node">ts-node</a></kbd></li>
    <li>Server: <a href="https://expressjs.com/pt-br/">Express</a></li>
    <li>Database:</li>
    <ul>
        <li><a href="https://www.sqlite.org/">SQLite</a></li>
        <li>Migrations: <a href="https://typeorm.io/">Typeorm</a></li>
        <li><a href="https://www.npmjs.com/package/reflect-metadata">Reflect Metadata</a></li>
        <li>ID Generator: <a href="https://www.npmjs.com/package/uuid">UUID</a></li>
    </ul>
    <li>Send Mail: <a href="https://nodemailer.com/">Nodemailer</a></li>
    <li>Tests: <a href="https://jestjs.io/pt-BR/">Jest Tests</a></li>
    <li>API Validation: <a href="https://www.npmjs.com/package/yup">Yup</a></li>
</ul>
<p>→ Check the file: <kbd><a href="https://github.com/FelipePDS/nps/blob/master/package.json">package.json</a></kbd></p>

<h3 id="techs-for-dev">For Dev</h3>
<ul>
    <li>Code Editor: <a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
    <li>Terminal: <a href="https://git-scm.com/downloads">Git Bash</a></li>
    <li>Package Manager: <a href="https://www.npmjs.com/">NPM</a> or <a href="https://yarnpkg.com/">Yarn</a></li>
    <li>API REST Tests: <a href="https://insomnia.rest/download">Insomnia</a></li>
    <li>Database Queries: <a href="https://www.beekeeperstudio.io/">Beekeeper Studio</a></li>
</ul>

<br>

<h2 id="use-api">:speech_balloon: Use API</h2>
<p>
    Before we see how to use the API, let's understand a little bit about some things about it
    <br><br>
    :game_die: See data modeling to understand a little about its structure:
    <br><br>
    <img width="75%" src="https://github.com/FelipePDS/nps/blob/master/.github/images/data-modeling.png"/>
</p>

<h3 id="how-to-clone-the-api">:open_file_folder: How to Clone</h3>
<p>To perform your cloning we need the <kbd><a href="https://git-scm.com/downloads">Gitbash</a></kbd> terminal, which we will do using commands that already automate some processes...</p>

``` bash
# To clone repository
$ git clone https://github.com/FelipePDS/nps.git

# Open
$ cd nps
```

<h3 id="how-to-configure-the-api">:wrench: How to Configure</h3>
<p>Before all install the dependencies (technologies used):</p>

``` bash
$ yarn add
# OR
$ npm install
```

<p>Run the Database:</p>

``` bash
# Execução feita com o typeorm

$ yarn typeorm:run
# OR
$ npm typeorm:run
```

<blockquote>If you want to change the server's execution port: Go to the  <kbd><a href="https://github.com/FelipePDS/nps/blob/master/.env">.env</a></kbd> file, change <code>3333</code> from both the <i>PORT</i> and <i>USER_ANSWER_URL_MAIL</i> to the port you want</blockquote>

<h3 id="how-to-run-the-api">:key: How to Run</h3>
<p>Before all execute the server:</p>

``` bash
$ yarn dev
# OR
$ npm dev

# If you have not changed the port, the access URL will be http://localhost:3333/
```

<p>Para fazer os testes de execução (API Rest) instale o <kbd><a href="https://insomnia.rest/download">Insomnia</a></kbd>. Assim será possível enviar requisições para as rotas...</p>

<blockquote>Take a look at the <kbd><a href="https://github.com/FelipePDS/nps/blob/master/src/router.ts">router.ts</a></kbd> file to check the routes and make requests</blockquote>

<p>See what are the parameters needed to make each type of request (and the routes)</p>
<ul>
    <li>User</li>
    <li>Survey</li>
    <li>Send Mail</li>
    <li>NPS Calculate</li>
</ul>

<h4>:bust_in_silhouette: User</h4>
<p>/users (POST Method) <br> (Example):</p>

``` json
{
   "name": "User Example",
   "email": "example@mail.com"
}
```

<br>
<h4>:mag: Survey</h4>
<p>/surveys (POST Method) <br> (Example):</p>

``` json
{
   "title": "Give your evaluation:",
   "description": "From 0 to 10, how much would you recommend Rocketseat?"
}
```

<br>
<h4>:email: Send Mail</h4>
<p>/sendMail (POST Method) <br> (Example):</p>

``` json
{
   "email": "example@mail.com",
   "survey_id": "idDeAlgumaPesquisaSalvaNoSistema"
}
```

<br>
<h4>:star: NPS Calculate</h4>
<p>/nps/:survey_id (GET Method)</p>

<br>

<h1 id="documentation">:books: Documentation (to learn about developing an API)</h1>
<p>

</p>

<br>

<h2 id="references">:anchor: References (materials)</h2>
<p>

</p>

<br>

<h2 id="author">:man: Author</h2>
<p><img width="100px" src="https://avatars.githubusercontent.com/u/64941387?s=400&u=a9c0d7a657b0b0b644d41cd88966e0a89d0a67a6&v=4"/></p>
<p>This repository and documentation was made by <a href="https://felipepds.github.io">FelipePDS</a> :star2:</p>
<p><a href="https://www.linkedin.com/in/felipe-p-da-silva-a55b891ba/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BiErPy3g7Q1KGOaD%2BsGw%2Fpg%3D%3D"><img src="https://img.shields.io/static/v1?label=+&message=Felipe+P.+Da+Silva&color=0A66C2&style=flat&logo=linkedin&logoColor=white"/></a> <a href="https://twitter.com/FelipePintoDaS1"><img src="https://img.shields.io/static/v1?label=+&message=@FelipePintoDaS1&color=1DA1F2&style=flat&logo=twitter&logoColor=white"/></a> <img src="https://img.shields.io/static/v1?label=+&message=felipepdasilva66@gmail.com&color=EA4335&style=flat&logo=gmail&logoColor=white"/></p>

<br>

<h2 align="center" id="license">:bookmark_tabs: License</h2>
<p align="center"><a href="https://github.com/FelipePDS/NextLevelWeek4-nps/blob/master/LICENSE">MIT License</a> &nbsp;&bull;&nbsp; &copy; FelipePDS</p>
