#ifndef NODE_H
#define NODE_H


class Node
{
    public:
        int Data;
        Node *next,*prev;

        Node(int data) {
        Data = data;
        prev=next=NULL;

        }

    protected:

    private:
};

#endif // NODE_H
