using UnityEngine;
using System.Collections;

public class Freja_Movement : MonoBehaviour {
    public float speed;
    public GameObject camera;
    public GameObject cylinder;
    public Animator anim;
    public Rigidbody rbody;
	// Use this for initialization
	void Start () {
        
      }
	
	// Update is called once per frame
	void Update () {
        anim.SetFloat("Freja_Run", 0);
        anim.SetFloat("Freja_Attack", 0);
        
        //Attack
        if (Input.GetKey(KeyCode.J))
        {
            anim.SetFloat("Freja_Attack",1);
        }

        //Foward 
        if (Input.GetKey(KeyCode.W) && anim.GetInteger("Freja_Dead") != 1)
        {
            anim.SetFloat("Freja_Run", 1);
            speed = 10;
            System.Threading.Thread.Sleep(100);
            transform.Translate(new Vector3(0, 0, speed) * Time.deltaTime);
         }

        //Bacward
        if (Input.GetKey(KeyCode.S) && anim.GetInteger("Freja_Dead") != 1)
        {
            speed = -10;
            anim.SetFloat("Freja_Run", 1);
            transform.Translate(new Vector3(0, 0, speed) * Time.deltaTime);
        }

            //Only rotate player
            if (Input.GetKey(KeyCode.D) && !Input.GetKey(KeyCode.K) && anim.GetInteger("Freja_Dead") != 1)
            {
                speed = 90;
                transform.Rotate(Vector3.up, speed * Time.deltaTime);
            }
            if (Input.GetKey(KeyCode.A) && !Input.GetKey(KeyCode.K) && anim.GetInteger("Freja_Dead") != 1)
            {
                speed = -90;   
                transform.Rotate(Vector3.up, speed * Time.deltaTime);
            }
        
    }
}
