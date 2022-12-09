#ifndef QUEUE_H
#define QUEUE_H

#define QUEUE_H

#include <iostream>
#include <Node.h>

using namespace std;
template <class T>

class Queue
{
     Node<T> *Front,*Rear;

    public:
        Queue() {
        Front=Rear=NULL;
        }


        /********Enque********/
        void Enqueue(T data){
             Node<T> *temp = new Node<T>(data);
             if(Rear == NULL){
                Front=Rear=temp;
             }
             Rear->next=temp;
             Rear=temp;

        }
         /*******Dequeue Fun******/
       void Dequeue(){
           Node<T> *temp;

         if(Front==NULL){
            cout<<"Queue is empty"<<endl;
            return ;
         }
         else{
            temp=Front;
            Front=Front->next;

            if(Front==NULL){
                Rear=NULL;
            }
            delete(temp);
       }

       }
        void display(){
            Node<T> *temp=Front;
            while(temp !=NULL){
                cout<<temp->Data<<endl;
                temp=temp->next;
            }
        }
    protected:

    private:
};

#endif // QUEUE_H

