#include "MenuScene.h"
#include "ui/CocosGUI.h"
#include "WorldScene.h"
#include "SimpleAudioEngine.h"

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

	auto audio = CocosDenshion::SimpleAudioEngine::getInstance();
	audio->preloadBackgroundMusic("Friction.mp3");
	audio->playBackgroundMusic("Friction.mp3");

	auto origin = Director::getInstance()->getVisibleOrigin();
	auto winSize = Director::getInstance()->getVisibleSize();
	auto background = DrawNode::create();
	background->drawSolidRect(origin, winSize, Color4F(0.6f, 0.6f, 0.9f, 1.0f));
	this->addChild(background);

	auto titl = Label::createWithSystemFont("Archer Dash", "Comic Sans MS", 64);
	titl->setPosition(Vec2(300, 600));
	titl->setColor(Color3B(20, 20, 255));
	this->addChild(titl);
	
	Vector<MenuItem*> MenuItems;
	auto newgameLabel = Label::createWithSystemFont("New Game", "Comic Sans MS", 28);
	auto newgameItemLabel = MenuItemLabel::create(newgameLabel, CC_CALLBACK_0(MenuScene::playGame, this));
	//auto closeItem = MenuItemImage::create("CloseNormal.png", "CloseSelected.png",
		//CC_CALLBACK_0(MenuScene::playGame, this));
	//MenuItems.pushBack(closeItem);
	MenuItems.pushBack(newgameItemLabel);
	auto menu = Menu::createWithArray(MenuItems);
	menu->setPosition(Vec2(300, 300));
	menu->setColor(Color3B(20, 20,255));
	this->addChild(menu, 1);

	return true;
}

void MenuScene::playGame() {
	//auto scene = WorldScene::createScene();
	auto scene = HelpScene::createScene();
	Director::getInstance()->replaceScene(scene);
	log("Scene after replaceScene - reference count: %d", Director::getInstance()->getRunningScene()->getReferenceCount());
}