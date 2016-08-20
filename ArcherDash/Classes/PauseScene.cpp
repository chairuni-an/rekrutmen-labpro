#include "PauseScene.h"
#include "ui/CocosGUI.h"
#include "WorldScene.h"

USING_NS_CC;



cocos2d::Scene* PauseScene::createScene()
{
	auto scene = Scene::create();
	auto layer = PauseScene::create();
	scene->addChild(layer);

	return scene;
}

bool PauseScene::init()
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

	auto titl = Label::createWithSystemFont("Game Paused", "Comic Sans MS", 36);
	titl->setPosition(Vec2(300, 600));
	titl->setColor(Color3B(20, 20, 255));
	this->addChild(titl);
	
	Vector<MenuItem*> PauseItems;
	auto newgameLabel = Label::createWithSystemFont("Resume", "Comic Sans MS", 28);
	auto newgameItemLabel = MenuItemLabel::create(newgameLabel, CC_CALLBACK_0(PauseScene::playGame, this));
	//auto closeItem = PauseItemImage::create("CloseNormal.png", "CloseSelected.png",
		//CC_CALLBACK_0(PauseScene::playGame, this));
	//PauseItems.pushBack(closeItem);
	PauseItems.pushBack(newgameItemLabel);
	auto Pause = Menu::createWithArray(PauseItems);
	Pause->setPosition(Vec2(300, 300));
	Pause->setColor(Color3B(20, 20,255));
	this->addChild(Pause, 1);

	return true;
}

void PauseScene::playGame() {
	Director::getInstance()->popScene();
}