#include "Player.h"

USING_NS_CC;

int Player::jump = 0;

Player::Player() {}

Player::~Player() {}

Player* Player::create()
{
	Player* pSprite = new Player();

	if (pSprite->initWithFile("Archer_Sprite.png"))
	{
		pSprite->autorelease();

		pSprite->initOptions();

		pSprite->addEvents();

		return pSprite;
	}

	CC_SAFE_DELETE(pSprite);
	return NULL;
}

void Player::initOptions()
{
	//setScale(0.1f);
	setPosition(300, 100);
	setJump(0);
	setMode('a');
	setArrow(30);
	setShell(0);

	// 1
	auto monsterSize = getContentSize();

	auto physicsBody = PhysicsBody::createBox(Size(monsterSize.width, monsterSize.height),
		PhysicsMaterial(0.1f, 1.0f, 0.0f));
	// 2
	physicsBody->setDynamic(true);
	// 3
	physicsBody->setCategoryBitmask((int)PhysicsCategory::Player);
	physicsBody->setCollisionBitmask((int)PhysicsCategory::None);
	physicsBody->setContactTestBitmask((int)PhysicsCategory::Quiver);
	physicsBody->setContactTestBitmask(5);

	setPhysicsBody(physicsBody);
	// do things here like setTag(), setPosition(), any custom logic.
}

void Player::addEvents()
{
	auto listener = cocos2d::EventListenerTouchOneByOne::create();
	listener->setSwallowTouches(true);

	listener->onTouchBegan = [&](cocos2d::Touch* touch, cocos2d::Event* event)
	{
		cocos2d::Vec2 p = touch->getLocation();
		cocos2d::Rect rect = this->getBoundingBox();

		if (rect.containsPoint(p))
		{
			return true; // to indicate that we have consumed it.
		}

		return false; // we did not consume this event, pass thru.
	};

	listener->onTouchEnded = [=](cocos2d::Touch* touch, cocos2d::Event* event)
	{
		Player::touchEvent(touch,touch->getLocation());
	};

	cocos2d::Director::getInstance()->getEventDispatcher()->addEventListenerWithFixedPriority(listener, 30);

	//----------------------------------------------

	auto eventListener = EventListenerKeyboard::create();
	eventListener->onKeyPressed = [](EventKeyboard::KeyCode keyCode, Event* event) {

		Vec2 loc = event->getCurrentTarget()->getPosition();
		switch (keyCode) {
		case EventKeyboard::KeyCode::KEY_LEFT_ARROW:
		case EventKeyboard::KeyCode::KEY_A:
			if (loc.x > border)
				event->getCurrentTarget()->setPosition(loc.x - 50, loc.y);
			break;
		case EventKeyboard::KeyCode::KEY_RIGHT_ARROW:
		case EventKeyboard::KeyCode::KEY_D:
			if (loc.x < (contentwidth-border))
				event->getCurrentTarget()->setPosition(50 + loc.x, loc.y);
			break;
		case EventKeyboard::KeyCode::KEY_UP_ARROW:
		case EventKeyboard::KeyCode::KEY_W:
			event->getCurrentTarget()->setPosition(loc.x, 50 + loc.y);
			break;
		case EventKeyboard::KeyCode::KEY_DOWN_ARROW:
		case EventKeyboard::KeyCode::KEY_S:
			event->getCurrentTarget()->setPosition(loc.x, loc.y - 50);
			break;
		case EventKeyboard::KeyCode::KEY_SPACE:
			cocos2d::Vector<FiniteTimeAction*> actions;
			cocos2d::log("%d",Player::getJump());
			Player::setJump(1);
			cocos2d::log("%d",Player::getJump());
			actions.pushBack(cocos2d::ScaleBy::create(0.35f, 2));
			actions.pushBack(cocos2d::ScaleBy::create(0.35f, 0.5));
			actions.pushBack(cocos2d::CallFunc::create([]() {Player::setJump(0); cocos2d::log("%d", Player::getJump()); }));
			auto sequence = cocos2d::Sequence::create(actions);
			event->getCurrentTarget()->runAction(sequence);
			break;
		}

	};

	cocos2d::Director::getInstance()->getEventDispatcher()->addEventListenerWithSceneGraphPriority(eventListener, this);
}

void Player::touchEvent(cocos2d::Touch* touch, cocos2d::Vec2 _point)
{
	CCLOG("touched Player");
}

int Player::getJump() {
	return jump;
}

void Player::setJump(int a) {
	jump = a;
}

char Player::getMode() {
	return mode;
}

void Player::setMode(char a) {
	mode = a;
}

int Player::getArrow() {
	return arrow;
}

void Player::setArrow(int a) {
	arrow = a;
}

int Player::getShell() {
	return shell;
}

void Player::setShell(int a) {
	shell = a;
}