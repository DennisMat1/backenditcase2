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
    const quiz2 = new quizzes({
        quizName: "Dieren",
        creator: "Ben Vermeulen",
        createdAt: "2022/02/18",
        updatedAt: "2022/08/01",
        state: "Closed"
    });


    //Questions
    const question1 = new questions({
        question: "Waarmee proeven vlinders?",
        timeLimit: 10,
        pointsType: "standard",
        score: 2,
        position: 0,
        description: "Vraag over vlinders",
        image: "./path",
        video: "./path",
        fkQuiz: quiz2
    });

    const question2 = new questions({
        question: "Hoeveel vleugels heeft een mug?",
        timeLimit: 10,
        pointsType: "double",
        score: 2,
        position: 1,
        description: "Vraag over de mug",
        image: "./path",
        video: "./path",
        fkQuiz: quiz2
    });


    //Answers
    const answers1Q1 = new answers({
        answer: "Met hun poten",
        isCorrect: true,
        fkQuestion: question1
    })

    const answers2Q1 = new answers({
        answer: "Met hun vleugels",
        isCorrect: false,
        fkQuestion: question1
    })

    //Q2
    const answers1Q2 = new answers({
        answer: "Vier",
        isCorrect: false,
        fkQuestion: question2
    });

    const answers2Q2 = new answers({
        answer: "Twee",
        isCorrect: true,
        fkQuestion: question2
    });


    //collaborators
    const collaborator1 = new collaborators({
        collaboratorName: "Atif",
        participated: true,
        fkQuiz: quiz2
    });

    const collaborator2 = new collaborators({
        collaboratorName: "Ben Vermeulen",
        participated: false,
        fkQuiz: quiz2
    });

    const collaborator3 = new collaborators({
        collaboratorName: "Denis",
        participated: true,
        fkQuiz: quiz2
    });

    const collaborator4 = new collaborators({
        collaboratorName: "Sumaya",
        participated: true,
        fkQuiz: quiz2
    });

    const collaborator5 = new collaborators({
        collaboratorName: "Ben Verbraecken",
        participated: true,
        fkQuiz: quiz2
    });

    //Users
    const user1 = new users({
        name: "Anna",
        authId: "anna@hotmail.com",
        fkQuiz: quiz2
    });

    const user2 = new users({
        name: "Khalid",
        authId: "khalid@hotmail.com",
        fkQuiz: quiz2
    });


    //Scores
    //User1 scores
    const score1user1 = new scores({
        userScore: 10,
        fkquestion: question1,
        fkUser: user1
    });

    const score2user1 = new scores({
        userScore: 10,
        fkquestion: question2,
        fkUser: user1
    });


    //User2 scores
    const score1user2 = new scores({
        userScore: 5,
        fkquestion: question1,
        fkUser: user2
    });

    const score2user2 = new scores({
        userScore: 0,
        fkquestion: question2,
        fkUser: user2
    });


    try {
        await quiz2.save();
        console.log(quiz2)

        await question1.save();
        await question2.save();

        await answers1Q1.save();
        await answers2Q1.save();

        await answers1Q2.save();
        await answers2Q2.save();

        await collaborator1.save();
        await collaborator2.save();
        await collaborator3.save();
        await collaborator4.save();
        await collaborator5.save();

        await user1.save();
        await user2.save();

        await score1user1.save();
        await score2user1.save();

        await score1user2.save();
        await score2user2.save();

        mongoose.connection.close(function () { console.log("Database is disconnected") });
        process.exit(0);

    } catch (error) {
        console.log(error)
    }
})();