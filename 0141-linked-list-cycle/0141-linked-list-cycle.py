# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        hare = head
        while hare and hare.next:
            head = head.next
            hare = hare.next.next
            if hare == head:
                return True
        return False
        