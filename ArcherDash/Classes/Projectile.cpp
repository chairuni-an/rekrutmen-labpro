#include "Projectile.h"

USING_NS_CC;

Projectile::Projectile() {}

Projectile::~Projectile() {}

Projectile* Projectile::create()
{
	Projectile* pSprite = new Projectile();

	if (pSprite->initWithFile("Arrow.png"))
	{
		pSprite->autorelease();

		pSprite->initOptions();

		pSprite->addEvents();

		return pSprite;
	}

	CC_SAFE_DELETE(pSprite);
	return NULL;
}

void Projectile::initOptions()
{
	setScale(0.5f);
	setPosition(240, 500);
	setTag(1);

	// 1
	auto monsterSize = getContentSize();

	auto physicsBody = PhysicsBody::createBox(Size(monsterSize.width + 10, monsterSize.height + 10),
		PhysicsMaterial(0.1f, 1.0f, 0.0f));
	// 2
	physicsBody->setDynamic(true);
	// 3
	physicsBody->setCategoryBitmask((int)PhysicsCategory::Projectile);
	physicsBody->setCollisionBitmask((int)PhysicsCategory::None);
	physicsBody->setContactTestBitmask((int)PhysicsCategory::Animal);

	setPhysicsBody(physicsBody);
	// do things here like setTag(), setPosition(), any custom logic.
}

void Projectile::addEvents()
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
		Projectile::touchEvent(touch,touch->getLocation());
	};

	cocos2d::Director::getInstance()->getEventDispatcher()->addEventListenerWithFixedPriority(listener, 30);*/

	//----------------------------------------------

	
}

void Projectile::touchEvent(cocos2d::Touch* touch, cocos2d::Vec2 _point)
{
	CCLOG("touched Projectile");
}

char Projectile::getMode() {
	return mode;
}

void Projectile::setMode(char a) {
	mode = a;
}