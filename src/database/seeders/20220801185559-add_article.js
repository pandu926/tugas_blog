'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        await queryInterface.bulkInsert('posts', [{
                user_id: 1,
                title: "mencari",
                body: "apakah aku saja yang ngapain",
                post_image: "pandu.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                user_id: 2,
                title: "mencari saya",
                body: "apakah aku saja yang ngapain",
                post_image: "pandu.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                user_id: 1,
                title: "ayah",
                body: "apakah aku saja yang ngapain",
                post_image: "pandu.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                user_id: 2,
                title: "mungkin",
                body: "apakah aku saja yang ngapain",
                post_image: "pandu.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};