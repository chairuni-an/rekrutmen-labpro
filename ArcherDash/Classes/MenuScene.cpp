#include "MenuScene.h"
#include "ui/CocosGUI.h"
#include "WorldScene.h"

USING_NS_CC;



cocos2d::Scene* MenuScene::createScene()
{
	auto scene = Scene::create();
	auto layer = MenuScene::create();
	scene->addChild(layer);

	return scene;
}

bool MenuScene::init()
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
	
	Vector<MenuItem*> MenuItems;
	auto newgameLabel = Label::createWithSystemFont("New Game", "Arial", 18);
	auto newgameItemLabel = MenuItemLabel::create(newgameLabel, CC_CALLBACK_0(MenuScene::playGame, this));
	//auto closeItem = MenuItemImage::create("CloseNormal.png", "CloseSelected.png",
		//CC_CALLBACK_0(MenuScene::playGame, this));
	//MenuItems.pushBack(closeItem);
	MenuItems.pushBack(newgameItemLabel);
	auto menu = Menu::createWithArray(MenuItems);
	this->addChild(menu, 1);

	return true;
}

void MenuScene::playGame() {
	auto scene = WorldScene::createScene();
	Director::getInstance()->replaceScene(scene);
	log("Scene after replaceScene - reference count: %d", Director::getInstance()->getRunningScene()->getReferenceCount());
}