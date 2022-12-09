#ifndef STACK_H
#define STACK_H

#include <bits/stdc++.h>
#include <iostream>
#include <Node.h>

using namespace std;
 template <class T>
class Stack
{
    Node<T> *top;
    public:
        Stack() {
        top=NULL;
        }
   /*********Push Fun*********/
   void Push(T dataa){
       Node<T> *temp = new Node<T>(dataa);

       temp->Data = dataa;
       temp->next=top;
       top=temp;
   }
   /*******pop Fun******/
   void pop(){
       Node<T> *temp;


     if(top==NULL){
        cout<<"stack is empty"<<endl;
        return ;
     }
     else{
        temp=top;
        top=top->next;

        delete(temp);
   }

   }
   /*********disp Fun*******/
   void  display(){
     Node<T> *temp;

     if (top!=NULL){
        temp=top;
        while(temp !=NULL){
            cout << temp->Data<<endl;

            temp=temp->next;
        }
        return;
     }
     else{
        cout<<"stack is empty"<<endl;
        return ;
     }
   }
    protected:

    private:
};

#endif // STACK_H
