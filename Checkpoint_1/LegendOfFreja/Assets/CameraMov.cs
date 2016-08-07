using UnityEngine;
using System.Collections;

public class CameraMov : MonoBehaviour {
    public GameObject player;
    public Transform target;
    public Vector3 offset;
    public Animator anim;
	// Use this for initialization
	void Start () {
        offset = transform.position - player.transform.position;
    }
	
	/// Update is called once per frame
	void Update () {
        //Move foward/backward
        if ((Input.GetKey(KeyCode.W) || Input.GetKey(KeyCode.S)) && anim.GetInteger("Freja_Dead") != 1) { 
            transform.position = player.transform.position + offset;
        }

        //Rotate
        if (Input.GetKey(KeyCode.D) && Input.GetKey(KeyCode.K)){
            transform.RotateAround(target.position, Vector3.up, 50 * Time.deltaTime);
            offset = transform.position - player.transform.position;
        }
        if (Input.GetKey(KeyCode.A) && Input.GetKey(KeyCode.K)){
            transform.RotateAround(target.position, Vector3.up, -50 * Time.deltaTime);
            offset = transform.position - player.transform.position;
        }
          //  transform.eulerAngles = new Vector3(target.transform.eulerAngles.x, target.transform.eulerAngles.y, target.transform.eulerAngles.z);

    }
}
