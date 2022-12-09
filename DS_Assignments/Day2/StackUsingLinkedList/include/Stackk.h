#ifndef STACKK_H
#define STACKK_H

#include <iostream>
#include <Node.h>

 template <class T>

class Stackk
{
        Node<T> *top;
    public:
        Stackk() {
        top=-1;
        }
   /*********Push Fun*********/
   void Push(T data){
       Node<T> *temp = new Node<T>(data);

       temp->data = data;
       temp->next=top;
       top=temp;
   }
   /*******pop Fun******/
   void pop(){
       Node<T> *temp;
        temp=top;

     if(top==-1){
        cout<<"stack is empty"<<endl
        return ;
     }
     else{
        temp=top;
        top=top->next;
   }

   /*********disp Fun*******/
   void  display(){
     Node *temp;

     if(top==-1){
        cout<<"stack is empty"<<endl
        return ;
     }
     else{
        temp=top;
        while(temp !=-1){
            cout<<temp->data;

            temp=temp->next;
        }
     }
   }
    protected:

    private:
};

#endif // STACKK_H
