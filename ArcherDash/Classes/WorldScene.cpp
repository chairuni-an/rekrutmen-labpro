#include "WorldScene.h"

USING_NS_CC;



cocos2d::Scene* WorldScene::createScene()
{
	auto scene = Scene::createWithPhysics();
	scene->getPhysicsWorld()->setGravity(Vec2(0, 0));
	//scene->getPhysicsWorld()->setDebugDrawMask(PhysicsWorld::DEBUGDRAW_ALL);
	auto layer = WorldScene::create();
	scene->addChild(layer);
	srand(1);

	return scene;
}

bool WorldScene::init()
{
	if (!Layer::init())
	{
		return false;
	}

	auto origin = Director::getInstance()->getVisibleOrigin();
	auto winSize = Director::getInstance()->getVisibleSize();
	auto background = DrawNode::create();
	background->drawSolidRect(origin, winSize, Color4F(0.6f, 0.6f, 0.9f, 1.0f));
	this->addChild(background, -1);
	auto backgroundpic = Sprite::create("Background.jpg");
	//backgroundpic->setColor(Color3B(250, 250, 250));
	backgroundpic->setOpacity(100);
	backgroundpic->setPosition(300, 400);
	this->addChild(backgroundpic);

	speed = 1.0f;

	auto scorelabel = Label::createWithSystemFont("Score", "Arial", 18);
	scorelabel->setPosition(Vec2(510, 700));
	this->addChild(scorelabel);

	scoreboard = Label::createWithSystemFont("0", "Arial", 18);
	scoreboard->setPosition(Vec2(550, 700));
	score = 0;
	this->addChild(scoreboard);

	auto arrowlabel = Label::createWithSystemFont("Arrow : ", "Arial", 18);
	arrowlabel->setPosition(Vec2(510, 100));
	this->addChild(arrowlabel);

	arrow = Label::createWithSystemFont("0", "Arial", 18);
	arrow->setPosition(Vec2(550, 100));
	this->addChild(arrow);

	auto modelabel = Label::createWithSystemFont("Mode : ", "Arial", 18);
	modelabel->setPosition(Vec2(510, 200));
	this->addChild(modelabel);

	mode = Label::createWithSystemFont("Normal", "Arial", 18);
	mode->setPosition(Vec2(560, 200));
	this->addChild(mode);

	auto shelllabel = Label::createWithSystemFont("Shell : ", "Arial", 18);
	shelllabel->setPosition(Vec2(50, 100));
	this->addChild(shelllabel);

	shell = Label::createWithSystemFont("0", "Arial", 18);
	shell->setPosition(Vec2(80, 100));
	this->addChild(shell);

	/*auto sprite = Sprite::create("Archer_Sprite.png");

	sprite->setPosition(240, 100);
	sprite->setScale(0.2);*/

	//this->addChild(sprite, 0);
	Player* player = Player::create();
	this->addChild(player, 1);
	setArrow(player->getArrow());
	setShell(player->getShell());
	//Animal* a1 = Animal::create();
	//this->addChild(a1, 1);
	this->schedule(schedule_selector(WorldScene::addMonster), 3.5);
	this->schedule(schedule_selector(WorldScene::addAnimal), 1.5);
	this->schedule(schedule_selector(WorldScene::addRock), 3.5);
	this->schedule(schedule_selector(WorldScene::addQuiver), 10.5);
	this->schedule(schedule_selector(WorldScene::addShell), 20.5);
	this->schedule(schedule_selector(WorldScene::addLineRock), 12.5);

	//WorldScene::addMonster(1.5);
	
	auto mouselistener = EventListenerMouse::create();
	/*listener->onMouseDown = [](Event* event) {
		CCLOG("mouse");
		auto pro = Sprite::create("CloseNormal.png");
		pro->setPosition(10, 10);
		this->addChild(pro, 1);
	};*/
	mouselistener->onMouseDown = CC_CALLBACK_1(WorldScene::mouseClick, this, player);
	mouselistener->onMouseScroll = CC_CALLBACK_1(WorldScene::mouseScroll, this, player);

	auto keylistener = EventListenerKeyboard::create();
	keylistener->onKeyPressed = CC_CALLBACK_2(WorldScene::keyCommand, this, player);

	auto contactlistener = EventListenerPhysicsContact::create();
	contactlistener->onContactBegin = CC_CALLBACK_1(WorldScene::onContactBegin, this);

	_eventDispatcher->addEventListenerWithFixedPriority(mouselistener, 1);
	_eventDispatcher->addEventListenerWithFixedPriority(keylistener, 1);
	_eventDispatcher->addEventListenerWithFixedPriority(contactlistener, 1);

	
	return true;
}

void WorldScene::addMonster(float dt) {
	//auto monster = Sprite::create("monster.png");
	auto animal = Monster::create();

	

	auto monsterContentSize = animal->getContentSize();
	auto selfContentSize = this->getContentSize();
	int minX = border;
	int maxX = (selfContentSize.width - monsterContentSize.width / 2) - 100;
	int rangeX = maxX - minX;
	int randomX = ((rand() % rangeX) / 50) * 50 + minX;

	animal->setPosition(Vec2(randomX, 500));
	this->addChild(animal, 0);

	// 2
	int minDuration = 2.0;
	int maxDuration = 4.0;
	int rangeDuration = maxDuration - minDuration;
	int randomDuration = (rand() % rangeDuration) + minDuration;

	// 3
	auto actionMove = MoveTo::create(speed*randomDuration, Vec2(animal->getPosition().x, 0));
	auto actionRemove = RemoveSelf::create();
	//CCLOG("Category %d", animal->getPhysicsBody()->getCategoryBitmask());
	//CCLOG("Collision %d", animal->getPhysicsBody()->getCollisionBitmask());
	animal->runAction(Sequence::create(actionMove, actionRemove, nullptr));
}

void WorldScene::addAnimal(float dt) {
	//auto monster = Sprite::create("monster.png");
	auto animal = Animal::create();



	auto monsterContentSize = animal->getContentSize();
	auto selfContentSize = this->getContentSize();
	int minX = border;
	int maxX = (selfContentSize.width - monsterContentSize.width / 2) - 100;
	int rangeX = maxX - minX;
	int randomX = ((rand() % rangeX)/50)*50 + minX;

	animal->setPosition(Vec2(randomX, 500));
	this->addChild(animal, 0);

	// 2
	int minDuration = 2.0;
	int maxDuration = 4.0;
	int rangeDuration = maxDuration - minDuration;
	int randomDuration = (rand() % rangeDuration) + minDuration;

	// 3
	auto actionMove = MoveTo::create(speed*randomDuration, Vec2(animal->getPosition().x, 0));
	auto actionRemove = RemoveSelf::create();
	//CCLOG("Category %d", animal->getPhysicsBody()->getCategoryBitmask());
	//CCLOG("Collision %d", animal->getPhysicsBody()->getCollisionBitmask());
	animal->runAction(Sequence::create(actionMove, actionRemove, nullptr));
}

void WorldScene::addRock(float dt) {
	//auto monster = Sprite::create("monster.png");
	auto animal = Rock::create();



	auto monsterContentSize = animal->getContentSize();
	auto selfContentSize = this->getContentSize();
	int minX = border;
	int maxX = (selfContentSize.width - monsterContentSize.width / 2) - 100;
	int rangeX = maxX - minX;
	int randomX = ((rand() % rangeX) / 50) * 50 + minX;

	animal->setPosition(Vec2(randomX, 500));
	this->addChild(animal, 0);

	// 2
	int minDuration = 2.0;
	int maxDuration = 4.0;
	int rangeDuration = maxDuration - minDuration;
	int randomDuration = (rand() % rangeDuration) + minDuration;

	// 3
	auto actionMove = MoveTo::create(speed*randomDuration, Vec2(animal->getPosition().x, 0));
	auto actionRemove = RemoveSelf::create();
	//CCLOG("Category %d", animal->getPhysicsBody()->getCategoryBitmask());
	//CCLOG("Collision %d", animal->getPhysicsBody()->getCollisionBitmask());
	animal->runAction(Sequence::create(actionMove, actionRemove, nullptr));
}

void WorldScene::addQuiver(float dt) {
	//auto monster = Sprite::create("monster.png");
	auto animal = Quiver::create();



	auto monsterContentSize = animal->getContentSize();
	auto selfContentSize = this->getContentSize();
	int minX = border;
	int maxX = (selfContentSize.width - monsterContentSize.width / 2) - 100;
	int rangeX = maxX - minX;
	int randomX = ((rand() % rangeX) / 50) * 50 + minX;

	animal->setPosition(Vec2(randomX, 500));
	this->addChild(animal, 0);

	// 2
	int minDuration = 2.0;
	int maxDuration = 4.0;
	int rangeDuration = maxDuration - minDuration;
	int randomDuration = (rand() % rangeDuration) + minDuration;

	// 3
	auto actionMove = MoveTo::create(speed*randomDuration, Vec2(animal->getPosition().x, 0));
	auto actionRemove = RemoveSelf::create();
	//CCLOG("Category %d", animal->getPhysicsBody()->getCategoryBitmask());
	//CCLOG("Collision %d", animal->getPhysicsBody()->getCollisionBitmask());
	animal->runAction(Sequence::create(actionMove, actionRemove, nullptr));
}

void WorldScene::addShell(float dt) {
	//auto monster = Sprite::create("monster.png");
	auto animal = Shell::create();



	auto monsterContentSize = animal->getContentSize();
	auto selfContentSize = this->getContentSize();
	int minX = border;
	int maxX = (selfContentSize.width - monsterContentSize.width / 2) - 100;
	int rangeX = maxX - minX;
	int randomX = ((rand() % rangeX) / 50) * 50 + minX;

	animal->setPosition(Vec2(randomX, 500));
	this->addChild(animal, 0);

	// 2
	int minDuration = 2.0;
	int maxDuration = 4.0;
	int rangeDuration = maxDuration - minDuration;
	int randomDuration = (rand() % rangeDuration) + minDuration;

	// 3
	auto actionMove = MoveTo::create(speed*randomDuration, Vec2(animal->getPosition().x, 0));
	auto actionRemove = RemoveSelf::create();
	//CCLOG("Category %d", animal->getPhysicsBody()->getCategoryBitmask());
	//CCLOG("Collision %d", animal->getPhysicsBody()->getCollisionBitmask());
	animal->runAction(Sequence::create(actionMove, actionRemove, nullptr));
}

void WorldScene::mouseClick(cocos2d::Event* event, Player* player) {
	CCLOG("mouse");
	CCLOG("Category %x", player->getPhysicsBody()->getCategoryBitmask());
	CCLOG("Collision %x", player->getPhysicsBody()->getCollisionBitmask());
	if (player->getArrow() > 0) {
		Vec2 loc = player->getPosition();
		CCLOG("%d", player->getArrow());
		EventMouse* mouseEvent = dynamic_cast<EventMouse*>(event);
		mouseEvent->getMouseButton();
		//auto pro = Sprite::create("CloseNormal.png");
		auto pro = Projectile::create();
		pro->setPosition(loc);

		this->addChild(pro, 1);
		//pro->setPosition(mouseEvent->getLocation().x, this->getContentSize().height-mouseEvent->getLocation().y);
		if (player->getMode() == 'a') {
			pro->setMode('a');
			Vec2 offset = mouseEvent->getLocation();
			offset.y = this->getContentSize().height - offset.y;
			offset -= player->getPosition();
			offset.normalize();

			auto deg = atan(offset.x / offset.y) * 180 /3.14;
			if (offset.y<0) {
				deg += 180;
			}
			CCLOG("%f", deg);

			auto target = offset*1000 + player->getPosition();
			auto rotate = RotateBy::create(0, deg);
			auto shoot = MoveTo::create(2.0f, target);
			auto remove = RemoveSelf::create();
			pro->runAction(Sequence::create(rotate, shoot, remove, nullptr));
			player->setArrow(player->getArrow() - 1);
		}
		else {
			pro->setMode('b');
			auto shoot = MoveBy::create(2.0f, Vec2(0, 500));
			auto remove = RemoveSelf::create();
			pro->runAction(Sequence::create(shoot, remove, nullptr));
			player->setArrow(player->getArrow() - 4);
		}
		
		
		setArrow(player->getArrow());
	}
}

void WorldScene::mouseScroll(cocos2d::Event* event, Player* player) {
	cocos2d::log("Mouse wheel scrolled");
	if (player->getMode() == 'a') {
		player->setMode('b');
		CCLOG("Mode b");
	}
	else {
		player->setMode('a');
		CCLOG("Mode a");
	}
	setMode(player->getMode());
}

void WorldScene::keyCommand(EventKeyboard::KeyCode keyCode, cocos2d::Event* event, Player* player) {
	CCLOG("key %d pressed", keyCode);
	Vec2 loc = player->getPosition();
	switch (keyCode) {
	case EventKeyboard::KeyCode::KEY_F: {
		CCLOG("F");
		auto pro = Projectile::create();
		auto pro2 = Projectile::create();
		auto pro3 = Projectile::create();
		pro->setPosition(loc);
		pro2->setPosition(Vec2(loc.x - 50, loc.y));
		pro3->setPosition(Vec2(loc.x + 50, loc.y));
		pro->setMode('a');
		pro2->setMode('a');
		pro3->setMode('a');
		this->addChild(pro);
		this->addChild(pro2);
		this->addChild(pro3);
		auto shoot = MoveBy::create(2.0f, Vec2(0, 500));
		auto remove = RemoveSelf::create();
		pro->runAction(Sequence::create(shoot, remove, nullptr));
		pro2->runAction(Sequence::create(shoot->clone(), remove->clone(), nullptr));
		pro3->runAction(Sequence::create(shoot->clone(), remove->clone(), nullptr));
		setArrow(player->getArrow() - 5);
		break;
	}
	case EventKeyboard::KeyCode::KEY_ESCAPE:
		auto scene = GameOverScene::createScene();
		Director::getInstance()->pushScene(scene);
	}
}

bool WorldScene::onContactBegin(cocos2d::PhysicsContact &contact) {
	CCLOG("shape a cate : %d", contact.getShapeA()->getCategoryBitmask());
	CCLOG("shape b cate : %d", contact.getShapeB()->getCategoryBitmask());
	int bitA = contact.getShapeA()->getCategoryBitmask();
	int bitB = contact.getShapeB()->getCategoryBitmask();
	if (bitA == 3) {
		if (bitB == 1) {
			//Projectile hit enemy
			auto nodeB = contact.getShapeB()->getBody()->getNode();
			Projectile* pro = dynamic_cast<Projectile*>(contact.getShapeA()->getBody()->getNode());
			if (pro != NULL) {
				char mode = pro->getMode();
				int tag = nodeB->getTag();
				if (tag == 1) {
					Animal* node = dynamic_cast<Animal*>(nodeB);
					if (pro != NULL) {
						if (mode == 'b') {
							node->setHp(node->getHp() - 3);
						}
						else {
							node->setHp(node->getHp() - 1);
						}
					}
					CCLOG("%d", node->getHp());
					if (node->getHp() <= 0) {
						node->removeFromParent();
						setScore(getScore() + 100);
					}
				}
				else if (tag == 2) {
					Monster* node = dynamic_cast<Monster*>(nodeB);
					if (pro != NULL) {
						if (mode == 'b') {
							node->setHp(node->getHp() - 3);
						}
						else {
							node->setHp(node->getHp() - 1);
						}
					}
					CCLOG("%d", node->getHp());
					if (node->getHp() <= 0) {
						node->removeFromParent();
						setScore(getScore() + 500);
					}
				}




				if ((mode == 'a') || (tag == 3)) {
					if (pro != NULL)
						pro->removeFromParent();
				}
			}

			
		}
	}
	else if (bitA == 1) {
		if (bitB == 3) {
			//Enemy hit projectile
			auto nodeA = contact.getShapeA()->getBody()->getNode();
			Projectile* pro = dynamic_cast<Projectile*>(contact.getShapeB()->getBody()->getNode());
			if (pro != NULL) {
				char mode = pro->getMode();
				int tag = nodeA->getTag();
				if (tag == 1) {
					Animal* node = dynamic_cast<Animal*>(nodeA);
					if (pro != NULL) {
						if (mode == 'b') {
							node->setHp(node->getHp() - 3);
						}
						else {
							node->setHp(node->getHp() - 1);
						}
					}
					CCLOG("%d", node->getHp());
					if (node->getHp() <= 0) {
						node->removeFromParent();
						setScore(getScore() + 100);
					}
				}
				else if (tag == 2) {
					Monster* node = dynamic_cast<Monster*>(nodeA);
					if (pro != NULL) {
						if (mode == 'b') {
							node->setHp(node->getHp() - 3);
						}
						else {
							node->setHp(node->getHp() - 1);
						}
					}
					CCLOG("%d", node->getHp());
					if (node->getHp() <= 0) {
						node->removeFromParent();
						setScore(getScore() + 500);
					}
				}




				if ((mode == 'a') || (tag == 3)) {
					if (pro != NULL)
						pro->removeFromParent();
				}
			}
		}
		else if (bitB == 2) {
			//Enemy hit player
			Player* node = dynamic_cast<Player*>(contact.getShapeB()->getBody()->getNode());
			auto nodeA = contact.getShapeA()->getBody()->getNode();
			if ((Player::getJump() == 0) || (nodeA->getTag() == 2)) {
				if (node->getShell() == 0) {
					node->removeFromParentAndCleanup(true);
					death();
				}
				else {
					node->setShell(node->getShell() - 1);
					setShell(node->getShell());
				}
			}
			setScore(getScore() + 100);
			CCLOG("%d", Player::getJump());
		}
	}
	else if (bitA == 2) {
		if (bitB == 1) {
			//Player hit enemy
			Player* node = dynamic_cast<Player*>(contact.getShapeA()->getBody()->getNode());
			auto nodeB = contact.getShapeB()->getBody()->getNode();
			if ((Player::getJump() == 0) || (nodeB->getTag() == 2)) {
				if (node->getShell() == 0) {
					node->removeFromParentAndCleanup(true);
					death();
				}
				else {
					node->setShell(node->getShell() - 1);
					setShell(node->getShell());
				}
			}
			setScore(getScore() + 100);
			CCLOG("%d", Player::getJump());
		}
		else if (bitB == 4) {
			//Player hit quiver
			Player* node = dynamic_cast<Player*>(contact.getShapeA()->getBody()->getNode());
			auto nodeB = contact.getShapeB()->getBody()->getNode();
			if (nodeB->getTag() == 1) {
				node->setArrow(node->getArrow() + 20);
				contact.getShapeB()->getBody()->getNode()->removeFromParent();
				setArrow(node->getArrow());
				CCLOG("Arrow %d", node->getArrow());
			}
			else {
				node->setShell(node->getShell() + 1);
				contact.getShapeB()->getBody()->getNode()->removeFromParent();
				setShell(node->getShell());
			}
		}
	}
	else if (bitA == 4) {
		if (bitB == 2) {
			//Quiver hit Player
			Player* node = dynamic_cast<Player*>(contact.getShapeB()->getBody()->getNode());
			auto nodeA = contact.getShapeA()->getBody()->getNode();
			if (nodeA->getTag() == 1) {
				node->setArrow(node->getArrow() + 20);
				contact.getShapeA()->getBody()->getNode()->removeFromParent();
				setArrow(node->getArrow());
				CCLOG("Arrow %d", node->getArrow());
			}
			else {
				node->setShell(node->getShell() + 1);
				contact.getShapeA()->getBody()->getNode()->removeFromParent();
				setShell(node->getShell());
			}
		}
	}
	return true;
}

void WorldScene::setScore(int a) {
	if ((a % 2000 == 0) && (a > 0)) {
		if (speed > 0.4f) {
			setSpeed(speed - 0.1f);
		}
	}
	score = a;
	scoreboard->setString(std::to_string(a));
}

int WorldScene::getScore() {
	return score;
}

void WorldScene::setArrow(int a) {
	arrow->setString(std::to_string(a));
}

void WorldScene::setShell(int a) {
	shell->setString(std::to_string(a));
}

void WorldScene::addLineRock(float dt) {
	auto rock1 = Rock::create();
	auto rock2 = Rock::create();
	auto rock3 = Rock::create();
	auto rock4 = Rock::create();
	auto rock5 = Rock::create();
	auto rock6 = Rock::create();
	auto rock7 = Rock::create();

	rock1->setPosition(Vec2(150, 500));
	rock2->setPosition(Vec2(200, 500));
	rock3->setPosition(Vec2(250, 500));
	rock4->setPosition(Vec2(300, 500));
	rock5->setPosition(Vec2(350, 500));
	rock6->setPosition(Vec2(400, 500));
	rock7->setPosition(Vec2(450, 500));
	this->addChild(rock1, 0);
	this->addChild(rock2, 0);
	this->addChild(rock3, 0);
	this->addChild(rock4, 0);
	this->addChild(rock5, 0);
	this->addChild(rock6, 0);
	this->addChild(rock7, 0);


	// 3
	auto actionMove = MoveBy::create(speed * 3.0f, Vec2(0, -500));
	CCLOG("%f", speed);
	auto actionRemove = RemoveSelf::create();
	//CCLOG("Category %d", animal->getPhysicsBody()->getCategoryBitmask());
	//CCLOG("Collision %d", animal->getPhysicsBody()->getCollisionBitmask());
	rock1->runAction(Sequence::create(actionMove, actionRemove, nullptr));
	rock2->runAction(Sequence::create(actionMove->clone(), actionRemove->clone(), nullptr));
	rock3->runAction(Sequence::create(actionMove->clone(), actionRemove->clone(), nullptr));
	rock4->runAction(Sequence::create(actionMove->clone(), actionRemove->clone(), nullptr));
	rock5->runAction(Sequence::create(actionMove->clone(), actionRemove->clone(), nullptr));
	rock6->runAction(Sequence::create(actionMove->clone(), actionRemove->clone(), nullptr));
	rock7->runAction(Sequence::create(actionMove->clone(), actionRemove->clone(), nullptr));
}

void WorldScene::setSpeed(float a) {
	speed = a;
}

void WorldScene::setMode(char a) {
	if (a == 'a') {
		mode->setString("Normal");
	}
	else {
		mode->setString("Charged");
	}
}

void WorldScene::death() {
	_eventDispatcher->removeAllEventListeners();
	auto scene = GameOverScene::createScene();
	//Director::getInstance()->popScene();
	//Director::getInstance()->pushScene(scene);
	Director::getInstance()->replaceScene(scene);
	log("Scene after replaceScene - reference count: %d", Director::getInstance()->getRunningScene()->getReferenceCount());
}