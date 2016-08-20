#include "Shell.h"

USING_NS_CC;

Shell::Shell() {}

Shell::~Shell() {}

Shell* Shell::create()
{
	Shell* pSprite = new Shell();

	if (pSprite->initWithFile("Shell.png"))
	{
		pSprite->autorelease();

		pSprite->initOptions();

		pSprite->addEvents();

		return pSprite;
	}

	CC_SAFE_DELETE(pSprite);
	return NULL;
}

void Shell::initOptions()
{
	//setScale(0.2f);
	setPosition(240, 500);
	//setColor(Color3B(0, 0, 0));
	setTag(2);

	// 1
	auto ShellSize = getContentSize();

	auto physicsBody = PhysicsBody::createBox(Size(ShellSize.width , ShellSize.height ),
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

void Shell::addEvents()
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
		Shell::touchEvent(touch,touch->getLocation());
	};

	cocos2d::Director::getInstance()->getEventDispatcher()->addEventListenerWithFixedPriority(listener, 30);*/

	//----------------------------------------------

	
}

void Shell::touchEvent(cocos2d::Touch* touch, cocos2d::Vec2 _point)
{
	CCLOG("touched Shell");
}