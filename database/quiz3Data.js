const mongoose = require("mongoose");
const quizzes = require("../Model/quizzesModel");
const questions = require("../Model/questionsModel");
const answers = require("../Model/answersModel");
const collaborators = require("../Model/collaboratorsModel");
const users = require("../Model/usersModel");
const scores = require("../Model/scoresModel");


(async () => {
    await mongoose.connect("mongodb+srv://Ventigrate-GroepA:itcase2022@ventigrate.ekxtpls.mongodb.net/ITCase?retryWrites=true&w=majority");


    //Quiz
    const quiz3 = new quizzes({
        quizName: "Geschiedenis",
        creator: "Ben Verbraecken",
        createdAt: "2022/10/08",
        updatedAt: "2022/10/09",
        state: "Open"
    });

    //Questions
    const question1 = new questions({
        question: "In welk jaar werd de Berlijnse muur vernield?",
        timeLimit: 10,
        pointsType: "standard",
        score: 10,
        position: 0,
        description: "Vraag over de Berlijnse muur",
        image: "./path",
        video: "./path",
        fkQuiz: quiz3
    });

    //Answers
    const answers1Q1 = new answers({
        answer: "1989",
        isCorrect: true,
        fkQuestion: question1
    });

    const answers2Q1 = new answers({
        answer: "1991",
        isCorrect: false,
        fkQuestion: question1
    });

    //collaborators
    const collaborator1 = new collaborators({
        collaboratorName: "Ben Verbraecken",
        participated: true,
        fkQuiz: quiz3
    });

    const collaborator2 = new collaborators({
        collaboratorName: "Ben Vermeulen",
        participated: true,
        fkQuiz: quiz3
    });

    const collaborator3 = new collaborators({
        collaboratorName: "Denis",
        participated: false,
        fkQuiz: quiz3
    });

    const collaborator4 = new collaborators({
        collaboratorName: "Sumaya",
        participated: true,
        fkQuiz: quiz3
    });

    const collaborator5 = new collaborators({
        collaboratorName: "Atif",
        participated: true,
        fkQuiz: quiz3
    });


    //Users
    const user1 = new users({
        name: "Latifa",
        authId: "latifa@hotmail.com",
        fkQuiz: quiz3
    });

    const user2 = new users({
        name: "Steven",
        authId: "steven@hotmail.com",
        fkQuiz: quiz3
    });


    //Scores
    //User1 scores
    const score1user1 = new scores({
        userScore: 10,
        fkquestion: question1,
        fkUser: user1
    });


    //User2 scores
    const score1user2 = new scores({
        userScore: 0,
        fkquestion: question1,
        fkUser: user2
    });

    try {
        await quiz3.save();
        console.log(quiz3)

        await question1.save();

        await answers1Q1.save();
        await answers2Q1.save();

        await collaborator1.save();
        await collaborator2.save();
        await collaborator3.save();
        await collaborator4.save();
        await collaborator5.save();

        await user1.save();
        await user2.save();

        await score1user1.save();
        await score1user2.save();

        mongoose.connection.close(function () { console.log("Database is disconnected") });
        process.exit(0);

    } catch (error) {
        console.log(error);
    }
})();