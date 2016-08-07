using UnityEngine;
using UnityEngine.UI;
using System;
using System.Collections;

public class Freja_Health : MonoBehaviour
{
    public int freja_HP;
    public int freja_damage;
    public float enemy_Hit;
    public Transform enemy;
    public Animator anim;
    public Animator animEnem;
    public bool attackedAble;
    public Text hp_Text;
    public Text damage_show;
    public Animator textAnim;
    // Use this for initialization
    void Start()
    {
        freja_damage = 0;
        damage_show.text = "";
        freja_HP = 100;
        attackedAble = false;
    }

    void Update()
    {
        hp_Text.text = freja_HP + "/100";
        damage_show.text = "";
        if (freja_HP != 0 && animEnem.enabled==true)
        {
            freja_damage = 0;
            System.Random random = new System.Random();
            enemy_Hit = Vector3.Distance(transform.position, enemy.position);

            if (attackedAble == true)
            {
                if (enemy_Hit < 6.5)
                {
                    freja_damage = random.Next(0, 10);

                    if (freja_damage > 0) damage_show.text = "" + freja_damage;
                    else if (freja_damage == 0) damage_show.text = "MISS";
                    //textAnim.Play("Damage_Text_Up");
                    StartCoroutine(PlayAnimation());
                     
                    attackedAble = false;
                    freja_HP = freja_HP - freja_damage;
                    
                    if (freja_HP <= 0)
                    {
                        freja_HP = 0;
                        anim.SetInteger("Freja_Dead", 1);
                    }
                }
            }
            else
            {
                freja_damage = 0;
            }
        }
        if (attackedAble == false)
        {
            if (enemy_Hit >= 6.5) attackedAble = true;
            freja_damage = 0;
        }
    }


   /* void OnGUI()
    {
        GUI.Label(new Rect(Screen.width / 2, Screen.height / 2, 10000, 2000), enemy_Hit + "/" + freja_damage);
    }*/

    IEnumerator PlayAnimation()
    {
        textAnim.Play("Damage_Text_Up");
        yield return new WaitForSeconds(10.0f);
    }
}
