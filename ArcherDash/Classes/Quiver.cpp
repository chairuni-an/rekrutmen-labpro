#include "Quiver.h"

USING_NS_CC;

Quiver::Quiver() {}

Quiver::~Quiver() {}

Quiver* Quiver::create()
{
	Quiver* pSprite = new Quiver();

	if (pSprite->initWithFile("Quiver.png"))
	{
		pSprite->autorelease();

		pSprite->initOptions();

		pSprite->addEvents();

		return pSprite;
	}

	CC_SAFE_DELETE(pSprite);
	return NULL;
}

void Quiver::initOptions()
{
	//setScale(0.2f);
	setPosition(250, 500);
	//setColor(Color3B(255, 255, 255));
	setTag(1);

	// 1
	auto QuiverSize = getContentSize();

	auto physicsBody = PhysicsBody::createBox(Size(QuiverSize.width, QuiverSize.height),
		PhysicsMaterial(0.1f, 1.0f, 0.0f));
	// 2
	physicsBody->setDynamic(true);
	// 3
	physicsBody->setCategoryBitmask((int)PhysicsCategory::Quiver);
	physicsBody->setCollisionBitmask((int)PhysicsCategory::None);
	physicsBody->setContactTestBitmask((int)PhysicsCategory::Player);

	setPhysicsBody(physicsBody);
	// do things here like setTag(), setPosition(), any custom logic.
}

void Quiver::addEvents()
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
		Quiver::touchEvent(touch,touch->getLocation());
	};

	cocos2d::Director::getInstance()->getEventDispatcher()->addEventListenerWithFixedPriority(listener, 30);*/

	//----------------------------------------------

	
}

void Quiver::touchEvent(cocos2d::Touch* touch, cocos2d::Vec2 _point)
{
	CCLOG("touched Quiver");
}