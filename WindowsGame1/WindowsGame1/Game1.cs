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
        Texture2D walk, atk;
        Rectangle destRect, sourceRect, sourceRect_atk;
        float elapsed;
        float delay = 100f;
        int frameX = 0, frameY = 2;
        int frameX_atk = 0;
        int screenHeight, screenWidth;
        const int frameWidth = 64;
        const int frameHeight = 64;
        const int walkSpeed = 2;
        const int runSpeed = 4;
        bool isPressed = false;
        Enemy enemy;

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
            // Tes Musuh
            IsMouseVisible = true;
            enemy = new Enemy(Content.Load < Texture2D > ("Knight_walk"), new Vector2(400, 400), 150);
            walk = Content.Load<Texture2D>("archer_walk");
            atk = Content.Load<Texture2D>("archer_atk");
            
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
            enemy.Update();
            if (!Keyboard.GetState().IsKeyDown(Keys.Down) && !Keyboard.GetState().IsKeyDown(Keys.Up) 
                && !Keyboard.GetState().IsKeyDown(Keys.Right) && !Keyboard.GetState().IsKeyDown(Keys.Left))
            {
                frameX = 0;
                if (Keyboard.GetState().IsKeyDown(Keys.A))
                {
                    isPressed = true;
                }
                if (isPressed)
                {
                    elapsed += (float)gameTime.ElapsedGameTime.TotalMilliseconds;
                    if (elapsed >= delay * 0.6)
                    {
                        if (frameX_atk >= 12)
                        {
                            frameX_atk = 0;
                            isPressed = false;
                        }
                        else
                        {
                            frameX_atk++;
                        }
                        elapsed = 0;
                    }
                    sourceRect_atk = new Rectangle(frameWidth * frameX_atk, frameHeight * frameY, frameWidth, frameHeight);
                }
            } else {
                elapsed += (float)gameTime.ElapsedGameTime.TotalMilliseconds;
                frameX_atk = 0;
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
                    if (Keyboard.GetState().IsKeyDown(Keys.LeftShift))
                    {
                        destRect.Y -= runSpeed;
                    }
                    else
                    {
                        destRect.Y -= walkSpeed;
                    }
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
                    if (Keyboard.GetState().IsKeyDown(Keys.LeftShift))
                    {
                        destRect.X -= runSpeed;
                    }
                    else
                    {
                        destRect.X -= walkSpeed;
                    }
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
                    if (Keyboard.GetState().IsKeyDown(Keys.LeftShift)) {
                        destRect.Y += runSpeed;
                    } else {
                        destRect.Y += walkSpeed;
                    }
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
                    if (Keyboard.GetState().IsKeyDown(Keys.LeftShift))
                    {
                        destRect.X += runSpeed;
                    }
                    else
                    {
                        destRect.X += walkSpeed;
                    }
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
            if (isPressed && !Keyboard.GetState().IsKeyDown(Keys.Up) && !Keyboard.GetState().IsKeyDown(Keys.Right)
                && !Keyboard.GetState().IsKeyDown(Keys.Left) && !Keyboard.GetState().IsKeyDown(Keys.Down))
            {
                spriteBatch.Draw(atk, destRect, sourceRect_atk, Color.White);
            }
            else
            {
                spriteBatch.Draw(walk, destRect, sourceRect, Color.White);
            }
            enemy.Draw(spriteBatch);
            spriteBatch.End();

            base.Draw(gameTime);
        }
    }
}
