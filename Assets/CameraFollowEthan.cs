using UnityEngine;
using System.Collections;

public class CameraFollowEthan : MonoBehaviour {
    public float speed;
    public Animator anim;
    public GameObject camera;

	// Use this for initialization
	void Start () {
       
	}
	
	// Update is called once per frame
	void Update () {
        anim.SetFloat("walk", 0);
        if (Input.GetKey(KeyCode.W))
        {
            speed = 5;
            transform.Translate(new Vector3(0, 0, speed) * Time.deltaTime);
            anim.SetFloat("walk", 1);
        }
        if (Input.GetKey(KeyCode.S))
        {
            speed = -5;
            anim.SetFloat("walk", 1);
            transform.Translate(new Vector3(0, 0, speed) * Time.deltaTime);
        }
        if (Input.GetKey(KeyCode.D))
        {
            speed = 90;
            transform.Rotate(Vector3.up, speed * Time.deltaTime);
            camera.transform.Rotate(Vector3.up, speed * Time.deltaTime);
        }
        if (Input.GetKey(KeyCode.A))
        {
            speed = -90;
            camera.transform.Rotate(Vector3.up, speed * Time.deltaTime);
            transform.Rotate(Vector3.up, speed*Time.deltaTime);
        }
      
    }
}
