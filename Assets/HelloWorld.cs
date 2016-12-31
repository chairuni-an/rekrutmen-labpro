using UnityEngine;
using System.Collections;

public class HelloWorld : MonoBehaviour {
	public float distance;
	public Transform ethan;
    public float Rrue;
	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	void Update () {
        distance = Vector3.Distance(transform.position, ethan.position);
        if (distance < 4 && Input.GetKey(KeyCode.X))
            Rrue = 1;
	}

    void OnGUI()
    {
        if (Rrue == 1)
        {
            GUI.Label(new Rect(Screen.width / 2, Screen.height / 2, 10000, 2000), "Hello, World!!");
        }

    }
}
