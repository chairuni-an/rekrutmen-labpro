#include "HelpScene.h"
#include "ui/CocosGUI.h"
#include "WorldScene.h"

USING_NS_CC;



cocos2d::Scene* HelpScene::createScene()
{
	auto scene = Scene::create();
	auto layer = HelpScene::create();
	scene->addChild(layer);

	return scene;
}

bool HelpScene::init()
{
	if (!Layer::init())
	{
		return false;
	}

	auto origin = Director::getInstance()->getVisibleOrigin();
	auto winSize = Director::getInstance()->getVisibleSize();
	auto background = DrawNode::create();
	background->drawSolidRect(origin, winSize, Color4F(0.6f, 0.6f, 0.9f, 1.0f));
	this->addChild(background);

	auto helptitle = Label::createWithSystemFont("Controls", "Comic Sans MS", 36);
	helptitle->setPosition(Vec2(300, 750));
	helptitle->setColor(Color3B(20, 20, 255));
	this->addChild(helptitle);

	auto move = Label::createWithSystemFont("Use A, S, D, W to move", "Arial", 24);
	move->setPosition(Vec2(300, 700));
	this->addChild(move);

	auto klik = Label::createWithSystemFont("Click to shoot arrow", "Arial", 24);
	klik->setPosition(Vec2(300, 650));
	this->addChild(klik);

	auto spatk = Label::createWithSystemFont("Press F to use special attack", "Arial", 24);
	spatk->setPosition(Vec2(300, 600));
	this->addChild(spatk);

	auto jump = Label::createWithSystemFont("Press Space to jump", "Arial", 24);
	jump->setPosition(Vec2(300, 550));
	this->addChild(jump);

	auto scrol = Label::createWithSystemFont("Scroll Mouse to change mode\n Normal mode inflict 1 damage\n Charged mode inflict 3 damage", "Arial", 24);
	scrol->setPosition(Vec2(300, 480));
	this->addChild(scrol);

	auto ani = Label::createWithSystemFont("Animals can be killed or jumped\n Animals have 1 HP", "Arial", 24);
	ani->setPosition(Vec2(300, 400));
	this->addChild(ani);

	auto anim = Sprite::create("Animal.png");
	anim->setPosition(Vec2(100, 400));
	this->addChild(anim);

	auto mon = Label::createWithSystemFont("Monsters have to be killed\n Monsters have 3 HP", "Arial", 24);
	mon->setPosition(Vec2(300, 320));
	this->addChild(mon);

	auto mons = Sprite::create("Monster.png");
	mons->setPosition(Vec2(120, 320));
	this->addChild(mons);

	auto sto = Label::createWithSystemFont("Stones have to be jumped", "Arial", 24);
	sto->setPosition(Vec2(300, 270));
	this->addChild(sto);

	auto ston = Sprite::create("Rock.png");
	ston->setPosition(Vec2(120, 270));
	this->addChild(ston);

	auto qui = Label::createWithSystemFont("Take quiver to get 20 arrows", "Arial", 24);
	qui->setPosition(Vec2(300, 220));
	this->addChild(qui);

	auto quiv = Sprite::create("Quiver.png");
	quiv->setPosition(Vec2(100, 220));
	this->addChild(quiv);

	auto she = Label::createWithSystemFont("Take shell to be invicible", "Arial", 24);
	she->setPosition(Vec2(300, 170));
	this->addChild(she);

	auto shel = Sprite::create("Shell.png");
	shel->setPosition(Vec2(120, 170));
	this->addChild(shel);
	
	
	Vector<MenuItem*> MenuItems;
	auto newgameLabel = Label::createWithSystemFont("Play Game", "Comic Sans MS", 28);
	auto newgameItemLabel = MenuItemLabel::create(newgameLabel, CC_CALLBACK_0(HelpScene::playGame, this));
	//auto closeItem = HelpItemImage::create("CloseNormal.png", "CloseSelected.png",
		//CC_CALLBACK_0(HelpScene::playGame, this));
	//HelpItems.pushBack(closeItem);
	MenuItems.pushBack(newgameItemLabel);
	auto Help = Menu::createWithArray(MenuItems);
	Help->setPosition(Vec2(300, 100));
	Help->setColor(Color3B(20, 20,255));
	this->addChild(Help, 1);

	return true;
}

void HelpScene::playGame() {
	auto scene = WorldScene::createScene();
	Director::getInstance()->replaceScene(scene);
	log("Scene after replaceScene - reference count: %d", Director::getInstance()->getRunningScene()->getReferenceCount());
}