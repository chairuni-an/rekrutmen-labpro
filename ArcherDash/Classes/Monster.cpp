#include "Monster.h"

USING_NS_CC;

Monster::Monster() {}

Monster::~Monster() {}

Monster* Monster::create()
{
	Monster* pSprite = new Monster();

	if (pSprite->initWithFile("Monster.png"))
	{
		pSprite->autorelease();

		pSprite->initOptions();

		pSprite->addEvents();

		return pSprite;
	}

	CC_SAFE_DELETE(pSprite);
	return NULL;
}

void Monster::initOptions()
{
	//setScale(0.2f);
	setPosition(250, 500);
	//setColor(Color3B(0, 255, 0));
	hp = 3;
	setTag(2);

	// 1
	auto monsterSize = getContentSize();

	auto physicsBody = PhysicsBody::createBox(Size(monsterSize.width, monsterSize.height),
		PhysicsMaterial(0.1f, 1.0f, 0.0f));
	// 2
	physicsBody->setDynamic(true);
	// 3
	physicsBody->setCategoryBitmask((int)PhysicsCategory::Animal);
	physicsBody->setCollisionBitmask((int)PhysicsCategory::None);
	physicsBody->setContactTestBitmask((int)PhysicsCategory::Player);

	setPhysicsBody(physicsBody);
	// do things here like setTag(), setPosition(), any custom logic.
}

void Monster::addEvents()
{
	/*auto listener = cocos2d::EventListenerTouchOneByOne::create();
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
		Monster::touchEvent(touch,touch->getLocation());
	};

	cocos2d::Director::getInstance()->getEventDispatcher()->addEventListenerWithFixedPriority(listener, 30);*/

	//----------------------------------------------

	
}

void Monster::touchEvent(cocos2d::Touch* touch, cocos2d::Vec2 _point)
{
	CCLOG("touched Monster");
}

int Monster::getHp() {
	return hp;
}

void Monster::setHp(int a) {
	hp = a;
}