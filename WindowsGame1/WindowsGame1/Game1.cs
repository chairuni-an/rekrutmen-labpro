using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Audio;
using Microsoft.Xna.Framework.Content;
using Microsoft.Xna.Framework.GamerServices;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;
using Microsoft.Xna.Framework.Media;

namespace WindowsGame1
{
    /// <summary>
    /// This is the main type for your game
    /// </summary>
    public class Game1 : Microsoft.Xna.Framework.Game
    {
        GraphicsDeviceManager graphics;
        SpriteBatch spriteBatch;
        Texture2D walk;
        Texture2D head, armor, shoulder, accessories, leg, feet, belt, quiver;
        Rectangle destRect;
        Rectangle sourceRect;
        float elapsed;
        float delay = 100f;
        int frameX = 0, frameY = 2;
        int screenHeight, screenWidth;
        const int frameWidth = 64;
        const int frameHeight = 64;

        public Game1()
        {
            graphics = new GraphicsDeviceManager(this);
            Content.RootDirectory = "Content";
        }

        /// <summary>
        /// Allows the game to perform any initialization it needs to before starting to run.
        /// This is where it can query for any required services and load any non-graphic
        /// related content.  Calling base.Initialize will enumerate through any components
        /// and initialize them as well.
        /// </summary>
        protected override void Initialize()
        {
            destRect = new Rectangle(100,100,frameWidth,frameHeight);
            base.Initialize();
        }

        /// <summary>
        /// LoadContent will be called once per game and is the place to load
        /// all of your content.
        /// </summary>
        protected override void LoadContent()
        {
            // Create a new SpriteBatch, which can be used to draw textures.
            spriteBatch = new SpriteBatch(GraphicsDevice);
            walk = Content.Load<Texture2D>("archer_walk/BODY_male");
            head = Content.Load<Texture2D>("archer_walk/HEAD_leather_armor_hat");
            armor = Content.Load<Texture2D>("archer_walk/TORSO_leather_armor_torso");
            shoulder = Content.Load<Texture2D>("archer_walk/TORSO_leather_armor_shoulders");
            accessories = Content.Load<Texture2D>("archer_walk/TORSO_leather_armor_bracers");
            leg = Content.Load<Texture2D>("archer_walk/LEGS_pants_greenish");
            belt = Content.Load<Texture2D>("archer_walk/BELT_leather");
            quiver = Content.Load<Texture2D>("archer_walk/BEHIND_quiver");
            feet = Content.Load<Texture2D>("archer_walk/FEET_shoes_brown");
            
            //inisialisasi konstanta layar
            screenHeight = GraphicsDevice.Viewport.Height;
            screenWidth = GraphicsDevice.Viewport.Width;
        }

        /// <summary>
        /// UnloadContent will be called once per game and is the place to unload
        /// all content.
        /// </summary>
        protected override void UnloadContent()
        {
            // TODO: Unload any non ContentManager content here
        }

        /// <summary>
        /// Allows the game to run logic such as updating the world,
        /// checking for collisions, gathering input, and playing audio.
        /// </summary>
        /// <param name="gameTime">Provides a snapshot of timing values.</param>
        protected override void Update(GameTime gameTime)
        {
            if (!Keyboard.GetState().IsKeyDown(Keys.Down) && !Keyboard.GetState().IsKeyDown(Keys.Up) 
                && !Keyboard.GetState().IsKeyDown(Keys.Right) && !Keyboard.GetState().IsKeyDown(Keys.Left))
            {
                frameX = 0;
            } else {
                elapsed += (float)gameTime.ElapsedGameTime.TotalMilliseconds;
                if (Keyboard.GetState().IsKeyDown(Keys.Up)) {
                    frameY = 0;
                    if (elapsed >= delay) {
                        if (frameX >= 8) {
                            frameX = 0;
                        }
                        else {
                            frameX++;
                        }
                        elapsed = 0;
                    }
                    destRect.Y -= 2;
                    if (destRect.Y <= 0) {
                        destRect.Y = 0;
                    }
                }

                if (Keyboard.GetState().IsKeyDown(Keys.Left)) {
                    frameY = 1;
                    if (elapsed >= delay) {
                        if (frameX >= 8) {
                            frameX = 0;
                        }
                        else {
                            frameX++;
                        }
                        elapsed = 0;
                    }
                    destRect.X -= 2;
                    if (destRect.X <= 0) {
                        destRect.X = 0;
                    }
                }

                if (Keyboard.GetState().IsKeyDown(Keys.Down)) {
                    frameY = 2;
                    if (elapsed >= delay) {
                        if (frameX >= 8) {
                            frameX = 0;
                        }
                        else {
                            frameX++;
                        }
                        elapsed = 0;
                    }
                    destRect.Y += 2;
                    if (destRect.Y + frameHeight >= screenHeight) {
                        destRect.Y = screenHeight - frameHeight;
                    }
                }

                if (Keyboard.GetState().IsKeyDown(Keys.Right)) {
                    frameY = 3;
                    if (elapsed >= delay) {
                        if (frameX >= 8) {
                            frameX = 0;
                        }
                        else {
                            frameX++;
                        }
                        elapsed = 0;
                    }
                    destRect.X += 2;
                    if (destRect.X + frameWidth >= screenWidth) {
                        destRect.X = screenWidth - frameWidth;
                    }
                }
            }
            sourceRect = new Rectangle(frameWidth * frameX, frameHeight * frameY, frameWidth, frameHeight);
            base.Update(gameTime);
        }

        /// <summary>
        /// This is called when the game should draw itself.
        /// </summary>
        /// <param name="gameTime">Provides a snapshot of timing values.</param>
        protected override void Draw(GameTime gameTime)
        {
            GraphicsDevice.Clear(Color.CornflowerBlue);

            //Bagian penggambar karakter
            spriteBatch.Begin();
            spriteBatch.Draw(walk, destRect, sourceRect, Color.White);
            spriteBatch.Draw(head, destRect, sourceRect, Color.White);
            spriteBatch.Draw(armor, destRect, sourceRect, Color.White);
            spriteBatch.Draw(shoulder, destRect, sourceRect, Color.White);
            spriteBatch.Draw(leg, destRect, sourceRect, Color.White);
            spriteBatch.Draw(feet, destRect, sourceRect, Color.White);
            spriteBatch.Draw(accessories, destRect, sourceRect, Color.White);
            spriteBatch.Draw(belt, destRect, sourceRect, Color.White);
            spriteBatch.Draw(quiver, destRect, sourceRect, Color.White);
            spriteBatch.End();

            base.Draw(gameTime);
        }
    }
}
