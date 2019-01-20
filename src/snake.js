var game = new Phaser.Game(800, 600, Phaser.AUTO, 'snake', { preload: preload, create: create, update: update, render: render });

function preload()
{
    game.load.spritesheet('snake', 'assets/snake.png', 32, 32);
}

var head;
var tail;
var snake = [];
var snakeLength = 100;

function create()
{
  game.physics.startSystem(Phaser.Physics.ARCADE);

    game.world.setBounds(0, 0, 800, 600);

    cursors = game.input.keyboard.createCursorKeys();

    snakeHead = game.add.sprite(400, 300, 'snake');
    snakeHead.anchor.setTo(0.5, 0.5);

    for (i = 0; i < snakeLength; i++)
    {
      snake[i] = game.add.sprite()
    }
}

function update()
{

}

function render()
{

}
