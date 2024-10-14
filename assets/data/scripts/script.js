function create() {
    createSprite("test", 0, 0);
    setGraphic("test", "WindowTop");
    add("test");
}

function update(dt) {
    sprites.test.x = Math.cos(timer * 4) * 12;
}