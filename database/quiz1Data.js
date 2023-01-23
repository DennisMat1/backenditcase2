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
    const quiz1 = new quizzes({
        quizName: "Aardrijkskunde",
        creator: "Dennis",
        createdAt: "2022/08/12",
        updatedAt: "2022/08/20",
        state: "Draft"
    });

    //Questions
    const question1 = new questions({
        question: "Hoofdstad België?",
        timeLimit: 10,
        pointsType: "standard",
        score: 2,
        position: 0,
        description: "Vraag over hoofdstad van Belgîë",
        image: "./path",
        video: "./path",
        fkQuiz: quiz1
    });

    const question2 = new questions({
        question: "Welk continent is dit?",
        timeLimit: 10,
        pointsType: "double",
        score: 2,
        position: 1,
        description: "Vraag over een werelddeel",
        image: "./path",
        video: "./path",
        fkQuiz: quiz1
    });

    const question3 = new questions({
        question: "In welk land ligt de Kilimanjaro?",
        timeLimit: 10,
        pointsType: "standard",
        score: 2,
        position: 2,
        description: "Vraag over de Kilimanjaro",
        image: "./path",
        video: "./path",
        fkQuiz: quiz1
    });

    //Answers
    //Q1
    const answers1Q1 = new answers({
        answer: "Antwerpen",
        isCorrect: false,
        fkQuestion: question1
    })

    const answers2Q1 = new answers({
        answer: "Brussel",
        isCorrect: true,
        fkQuestion: question1
    })

    //Q2
    const answers1Q2 = new answers({
        answer: "Afrika",
        isCorrect: true,
        fkQuestion: question2
    })

    const answers2Q2 = new answers({
        answer: "Europa",
        isCorrect: false,
        fkQuestion: question2
    })


    //Q3
    const answers1Q3 = new answers({
        answer: "Somalië",
        isCorrect: false,
        fkQuestion: question3
    })

    const answers2Q3 = new answers({
        answer: "Tanzania",
        isCorrect: true,
        fkQuestion: question3
    });

    const answers3Q3 = new answers({
        answer: "Kenia",
        isCorrect: false,
        fkQuestion: question3
    })

    //collaborators
    const collaborator1 = new collaborators({
        collaboratorName: "Atif",
        participated: true,
        fkQuiz: quiz1
    });

    const collaborator2 = new collaborators({
        collaboratorName: "Ben Vermeulen",
        participated: true,
        fkQuiz: quiz1
    });

    const collaborator3 = new collaborators({
        collaboratorName: "Sumaya",
        participated: false,
        fkQuiz: quiz1
    });

    const collaborator4 = new collaborators({
        collaboratorName: "Ben Verbraecken",
        participated: true,
        fkQuiz: quiz1
    });


    //Users
    const user1 = new users({
        name: "Eddy",
        authId: "eddy@hotmail.com",
        fkQuiz: quiz1
    });

    const user2 = new users({
        name: "Tom",
        authId: "tom@hotmail.com",
        fkQuiz: quiz1
    });

    //Scores
    //User1 scores
    const score1user1 = new scores({
        fkquestion: question1,
        fkUser: user1
    });

    const score2user1 = new scores({
        fkquestion: question2,
        fkUser: user1
    });

    const score3user1 = new scores({
        userScore: 10,
        fkquestion: question3,
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

    const score3user2 = new scores({
        userScore: 0,
        fkquestion: question3,
        fkUser: user2
    });


    try {
        await quiz1.save();
        console.log(quiz1);

        await question1.save();
        await question2.save();
        await question3.save();

        await answers1Q1.save();
        await answers2Q1.save();

        await answers1Q2.save();
        await answers2Q2.save();


        await answers1Q3.save();
        await answers2Q3.save();
        await answers3Q3.save();

        await collaborator1.save();
        await collaborator2.save();
        await collaborator3.save();
        await collaborator4.save();

        await user1.save();
        await user2.save();

        await score1user1.save();
        await score2user1.save();
        await score3user1.save();

        await score1user2.save();
        await score2user2.save();
        await score3user2.save();

        mongoose.connection.close(function () { console.log("Database is disconnected") });
        process.exit(0);

    } catch (error) {
        console.log(error)
    }
})();